import React from "react";
import { Modal, StyleSheet, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";

type Props = {
  isLoading: boolean;
  viewStyle?: ViewStyle;
};

export const Loader = (props: Props) => {
  return (
    <Modal transparent animationType={"fade"} visible={props?.isLoading}>
      <View style={[styles.mainView, props?.viewStyle]}>
        <ActivityIndicator size={"large"} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
});
