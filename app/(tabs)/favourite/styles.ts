import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(12),
  },
});
