import { ThemeColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { moderateVerticalScale } from "react-native-size-matters";
import { ThemedView } from "./ThemedView";

type EmptyViewProps = {
  text?: string;
};

export const EmptyView: React.FC<EmptyViewProps> = (props) => {
  const { colors } = useTheme<ThemeColors>();

  return (
    <ThemedView style={styles.container}>
      <Text style={[styles.txtNoData, { color: colors.text }]}>
        {props?.text}
      </Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: moderateVerticalScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  txtNoData: {
    textAlign: "center",
    fontSize: 16,
  },
});
