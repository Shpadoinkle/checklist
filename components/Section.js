import React from "react";
import { View } from "react-native";
import { PADDING_HORIZONTAL } from "../constants/Values";

export default ({
  children,
  pv = 16,
  ph = PADDING_HORIZONTAL,
  bg = "#fff",
  mt = 0,
  btw = 0,
  bbw = 0,
  containerStyle = {}
}) => {
  return (
    <View
      style={[
        styles.sectionWrapper,
        {
          marginTop: mt,
          backgroundColor: bg,
          paddingVertical: pv,
          paddingHorizontal: ph,
          borderTopWidth: btw,
          borderBottomWidth: bbw,
          ...containerStyle
        }
      ]}
    >
      {children}
    </View>
  );
};

const styles = {
  sectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#ddd"
  }
};
