import React from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  StyleSheet
} from "react-native";
import { DotIndicator } from "react-native-indicators";
import Colors from "../constants/Colors";

export default ({
  text = "",
  style = {},
  cancel = false,
  onPress = () => {},
  icon,
  textStyle = {},
  disabled = false,
  loading = false,
  outlined,
  inverted = false,
  pv = 22,
  animatedStyle,
  animated = false,
  inline = false // Will need to wrap buttons in a flexDirection: 'row'
}) => {
  let Wrapper = disabled ? View : TouchableOpacity;

  return (
    <Animated.View style={[animatedStyle, inline && { flex: 1 }]}>
      <Wrapper
        style={[
          styles.default,
          disabled ? styles.disabled : {},
          outlined ? styles.outlined : {},
          inverted ? styles.inverted : {},
          cancel ? styles.cancel : {},
          // {paddingVertical: pv},
          style,
          { opacity: animated ? 1 : disabled ? 0.5 : 1 }
        ]}
        onPress={!disabled && onPress}
      >
        {!loading && (
          <>
            {!!icon && icon}
            <Animated.Text
              style={[
                styles.text,
                outlined ? styles.textOutlined : {},
                inverted ? styles.textInverted : {},
                textStyle
              ]}
            >
              {text}
            </Animated.Text>
          </>
        )}
        {loading && (
          <DotIndicator
            size={10}
            count={3}
            color={outlined ? "#d9d9d9" : "white"}
            animationDuration={800}
          />
        )}
      </Wrapper>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 20,
    backgroundColor: Colors.BRANDING_PRIMARY,
    borderRadius: 4
  },
  outlined: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR
  },
  disabled: {
    backgroundColor: Colors.GREY,
    opacity: 0.5
  },
  inverted: {
    backgroundColor: "#fff"
  },
  cancel: {
    backgroundColor: Colors.GREY
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    lineHeight: 20
  },
  textOutlined: {
    color: Colors.GREY
  },
  textInverted: {
    color: Colors.BRANDING_PRIMARY
  }
});
