import { EmptyView } from "@/components/EmptyView";
import { ImageView } from "@/components/ImageView";
import { ThemedView } from "@/components/ThemedView";
import { ThemeColors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { useProductDetails } from "./useProductDetails";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useProductDetails(id!);
  const { colors } = useTheme<ThemeColors>();

  const ProductDetails = () => {
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
      {state.productDetails ? <ProductDetails /> : <DetailsNotFound />}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  description: { fontSize: 16, marginBottom: 12 },
  price: { fontSize: 20, fontWeight: "600", marginBottom: 20 },
  favButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  favText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
