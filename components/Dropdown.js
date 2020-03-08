import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/FontAwesome";
import { PADDING_HORIZONTAL } from "../constants/Values";

export default ({
  title = "",
  leftIcon,
  leftIconColor = "#000",
  onLeftPress = null,

  rightIcon,
  rightIconColor = "#000",
  onRightPress = null,

  backgroundColor = "#fff",
  children = null,

  leftComponent = null,
  rightComponent = null,

  style = {}
}) => {
  return (
    <TouchableOpacity style={styles.headerButtons} onPress={onRightPress}>
      {onRightPress && (
        <Icon name={rightIcon} size={14} color={rightIconColor} />
      )}
    </TouchableOpacity>
  );
};

const styles = {
  headerButtons: {
    paddingHorizontal: PADDING_HORIZONTAL,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center"
  }
};
