import { Loader } from "@/components/Loader";
import { ProductsList } from "@/components/ProductsList";
import { Screen } from "@/components/Screen";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { useHome } from "./useHome";

export default function HomeScreen() {
  const home = useHome();

  return (
    <Screen>
      <ThemedView style={styles.container}>
        <Searchbar
          placeholder={home.t("searchProducts")}
          onChangeText={home.setSearch}
          value={home.search}
          style={styles.searchbar}
        />

        <ProductsList
          list={home.filteredProducts}
          emptyMsg={home.emptyMessage}
          refreshing={home.refresh}
          onRefresh={home.onRefresh}
        />

        <Loader isLoading={home.loading} />
      </ThemedView>
    </Screen>
  );
}
