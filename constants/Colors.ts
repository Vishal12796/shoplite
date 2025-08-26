import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

type CustomColors = MD3Colors & {
  text: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  borderColor: string;
  activeBorder: string;
  success: string;
  shadowColor: string;
};

export interface ThemeColors extends Omit<MD3Theme, "colors"> {
  colors: CustomColors;
}

export const LightTheme: ThemeColors = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#F2F2F7",
    text: "#11181C",
    success: "#34C759",
    error: "#FF3B30",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    borderColor: "#ddd",
    activeBorder: "#4287f5",
    shadowColor: "#000",
  },
};

export const DarkTheme: ThemeColors = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#0A84FF",
    secondary: "#5E5CE6",
    background: "#1C1C1E",
    text: "#F5F5F7",
    success: "#30D158",
    error: "#FF453A",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    borderColor: "#ddd",
    activeBorder: "#545454",
    shadowColor: "rgba(255, 255, 255, 0.1)",
  },
};
