import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export default ({ style = {}, children }) => {
  return <View style={[styles.default, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_COLOR
  }
});
