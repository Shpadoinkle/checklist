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
  style = {}
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          alignSelf: "stretch",
          backgroundColor: backgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          paddingTop: getStatusBarHeight(),
          alignItems: "flex-end"
        },
        style
      ]}
    >
      {children ? (
        <View style={{ width: "100%" }}>{children}</View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingVertical: 4
          }}
        >
          <TouchableOpacity style={styles.headerButtons} onPress={onLeftPress}>
            {onLeftPress && (
              <Icon name={leftIcon} size={14} color={leftIconColor} />
            )}
          </TouchableOpacity>
          <Text semiBold color={"#000"} size={16}>
            {title}
          </Text>

          <TouchableOpacity style={styles.headerButtons} onPress={onRightPress}>
            {onRightPress && (
              <Icon name={rightIcon} size={14} color={rightIconColor} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
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
