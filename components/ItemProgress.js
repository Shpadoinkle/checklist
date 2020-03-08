import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export default ({ length = 0, marked = 0 }) => {
  if (length < 1) return null;

  let boobs = [];
  for (let i = 1; i <= length; i++) {
    boobs.push(
      <View
        key={i}
        style={[
          styles.marker,
          i <= marked && styles.marked,
          {
            width: 150 / length
          },
          i === length && styles.noRightBorder
        ]}
      ></View>
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.MID_GREY,
        width: 150,

        height: 20
      }}
    >
      <View
        style={{
          height: "100%",
          width: (marked / length) * 150,
          backgroundColor: Colors.BRANDING_PRIMARY
        }}
      />
      {/* {boobs} */}
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    height: 20,
    backgroundColor: Colors.APP_BACKGROUND_COLOR
    // borderRightWidth: 1,
    // borderRightColor: Colors.MID_GREY
  },
  marked: {
    backgroundColor: Colors.BRANDING_PRIMARY
  },
  noRightBorder: {
    // borderRightWidth: 0
  }
});
