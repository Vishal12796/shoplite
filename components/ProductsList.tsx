import { ThemeColors } from "@/constants/Colors";
import { Product } from "@/types/products";
import { getNumColumns } from "@/utils/utils";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { EmptyView } from "./EmptyView";
import { ImageView } from "./ImageView";
import { ThemedView } from "./ThemedView";

type ProductsListProps = {
  list: Product[];
  emptyMsg: string;
  onRefresh?: () => void;
  refreshing?: boolean;
};

export const ProductsList: React.FC<ProductsListProps> = ({
  refreshing = false,
  ...props
}) => {
  const { width } = useWindowDimensions();
  const numColumns = getNumColumns(width);
  const { colors } = useTheme<ThemeColors>();

  const renderItem = ({ item, index }: ListRenderItemInfo<Product>) => (
    <TouchableOpacity
      onPress={() => {
        router.navigate(`/product/${item.id}`);
      }}
      style={[
        styles.productCard,
        {
          borderColor: colors.borderColor,
          shadowColor: colors.shadowColor,
          backgroundColor: colors.background,
        },
      ]}
    >
      <ImageView uri={item?.image} style={styles.productImage} />
      <Text style={[styles.productName, { color: colors.text }]}>
        {item.name}
      </Text>
      <Text style={[styles.productPrice, { color: colors.text }]}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={props.list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      key={numColumns}
      style={styles.listContent}
      columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
      ListEmptyComponent={<EmptyView text={props.emptyMsg} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={props?.onRefresh} />
      }
      ListFooterComponent={<ThemedView style={styles.footer} />}
    />
  );
};

export const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    marginBottom: moderateVerticalScale(12),
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    ...Platform.select({
      ios: {
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
      },
    }),
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: moderateScale(12),
  },
  productImage: {
    width: "100%",
    height: moderateVerticalScale(120),
    borderRadius: moderateScale(8),
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: moderateVerticalScale(8),
  },
  productPrice: {
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    marginTop: moderateVerticalScale(20),
    fontSize: 16,
  },
  listContent: {
    paddingBottom: moderateVerticalScale(12),
  },
  footer: {
    height: moderateVerticalScale(36),
  },
});
