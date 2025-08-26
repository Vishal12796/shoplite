import { ThemeColors } from "@/constants/Colors";
import React from "react";
import { View, type ViewProps } from "react-native";
import { useTheme } from "react-native-paper";

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const { colors } = useTheme<ThemeColors>();

  return (
    <View
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}
