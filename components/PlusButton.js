import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;

export default ({ disabled = false, style = {}, onPress = () => {} }) => {
  let Wrapper = disabled ? View : TouchableOpacity;

  return (
    <Wrapper
      style={[styles.default, style, { opacity: disabled ? 0.5 : 1 }]}
      onPress={!disabled && onPress}
    >
      <Icon name="plus" size={20} color="#fff" />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  default: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.BRANDING_PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: windowWidth / 2 - 25
  }
});
