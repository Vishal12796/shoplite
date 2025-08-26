import { EmptyView } from "@/components/EmptyView";
import { ImageView } from "@/components/ImageView";
import { ThemedView } from "@/components/ThemedView";
import { ThemeColors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useProductDetails } from "./useProductDetails";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useProductDetails(id!);
  const { colors } = useTheme<ThemeColors>();

  const productDetails = () => {
    return (
      state.productDetails && (
        <ThemedView>
          <ImageView uri={state.productDetails.image} style={styles.image} />
          <Text style={[styles.name, { color: colors.text }]}>
            {state.productDetails.name}
          </Text>
          <Text style={[styles.description, { color: colors.text }]}>
            {state.productDetails.description}
          </Text>
          <Text style={[styles.price, { color: colors.text }]}>
            {state.productDetails.price}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.favButton,
              {
                backgroundColor: state.isFavourite
                  ? colors.selectedColor
                  : colors.error,
              },
            ]}
            onPress={state.handleToggleFavourite}
          >
            <Text style={[styles.favText, { color: colors.text }]}>
              {state.isFavourite
                ? state.t("removeFromFavourites")
                : state.t("addToFavourites")}
            </Text>
          </TouchableOpacity>
        </ThemedView>
      )
    );
  };

  const DetailsNotFound = () => {
    return <EmptyView text={state.t("productNotFound")} />;
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {state.productDetails ? productDetails() : <DetailsNotFound />}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: moderateScale(16) },
  scrollContainer: { flex: 1, paddingTop: moderateVerticalScale(12) },
  image: {
    width: "100%",
    height: moderateVerticalScale(200),
    borderRadius: moderateScale(12),
    marginBottom: moderateVerticalScale(16),
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: moderateVerticalScale(8),
  },
  description: { fontSize: 16, marginBottom: moderateVerticalScale(12) },
  price: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: moderateVerticalScale(20),
  },
  favButton: {
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
    marginBottom: moderateVerticalScale(20),
  },
  favText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
