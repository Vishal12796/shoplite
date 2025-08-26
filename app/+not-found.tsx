import { ThemedView } from "@/components/ThemedView";
import { ThemeColors } from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export default function NotFoundScreen() {
  const { colors } = useTheme<ThemeColors>();
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <Text style={[{ color: colors.text }, styles.txtNotExist]}>
          {t("thisScreenDoesNotExist")}
        </Text>
        <Link href="/" style={styles.link}>
          <Text style={[{ color: colors.primary }, styles.txtLink]}>
            {t("goToHomeScreen")}
          </Text>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(20),
  },
  link: {
    marginTop: moderateVerticalScale(15),
    paddingVertical: moderateVerticalScale(15),
  },
  txtNotExist: {
    fontSize: 28,
  },
  txtLink: {
    fontSize: 24,
  },
});
