import { ProductsList } from "@/components/ProductsList";
import { Screen } from "@/components/Screen";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { styles } from "./styles";
import { useFavourite } from "./useFavourite";

export default function FavouriteProductsScreen() {
  const state = useFavourite();

  return (
    <Screen>
      <ThemedView style={styles.container}>
        <ProductsList
          list={state.favouriteProductsList}
          emptyMsg={state.t("noFavouriteProducts")}
        />
      </ThemedView>
    </Screen>
  );
}
