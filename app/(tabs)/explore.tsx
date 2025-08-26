import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <Screen>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
