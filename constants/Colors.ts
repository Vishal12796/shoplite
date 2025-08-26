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
};

export interface ThemeColors extends Omit<MD3Theme, "colors"> {
  colors: CustomColors;
}

export const LightTheme: ThemeColors = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
};

export const DarkTheme: ThemeColors = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
