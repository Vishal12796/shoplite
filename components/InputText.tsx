import { ThemeColors } from "@/constants/Colors";
import React from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

interface TextInputProp extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label: string;
  placeholderColor?: string;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export const InputText = ({
  value,
  onChangeText,
  placeholder,
  label,
  placeholderColor,
  style,
  secureTextEntry = false,
  keyboardType,
  ...props
}: TextInputProp) => {
  const { colors } = useTheme<ThemeColors>();

  return (
    <TextInput
      value={value}
      autoCapitalize="none"
      allowFontScaling={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      style={[
        styles.input,
        { backgroundColor: colors.secondaryContainer },
        style,
      ]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      label={label}
      mode={"outlined"}
      outlineColor={colors.borderColor}
      activeOutlineColor={colors.activeBorder}
      outlineStyle={styles.outlineStyle}
      selectionColor={colors.primary}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: moderateVerticalScale(10),
    fontSize: 16,
  },
  outlineStyle: {
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(2),
  },
});
