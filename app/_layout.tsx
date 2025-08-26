import { useAppTheme } from "@/hooks/useAppTheme";
import { persistor, store } from "@/redux/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../language/i18n";

const ThemeApp: React.FC = () => {
  const appTheme = useAppTheme();
  const { t } = useTranslation();

  return (
    <PaperProvider theme={appTheme.theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="product/[id]"
          options={{
            title: t("productDetails"),
            headerBackTitle: t("back"),
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeApp />
      </PersistGate>
    </Provider>
  );
}
