import React from "react";
import { View } from "react-native";

export default ({ h = 8 }) => {
  const height = h;
  return <View style={{ height }} />;
};
