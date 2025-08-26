import { useAppTheme } from "@/hooks/useAppTheme";
import { persistor, store } from "@/redux/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ThemeApp: React.FC = () => {
  const appTheme = useAppTheme();

  return (
    <PaperProvider theme={appTheme.theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
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
