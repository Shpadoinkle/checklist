import React from "react";
import { View } from "react-native";

export default ({
  children,
  pv = 16,
  ph = 24,
  bg = "#fff",
  mt = 0,
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
    justifyContent: "space-between"
  }
};
