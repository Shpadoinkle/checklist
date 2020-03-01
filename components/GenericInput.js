import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

const isIOS = Platform.OS === "ios";

export default class GenericInput extends Component {
  state = {
    focused: false,
    dirty: false
  };

  onChangeText = val => {
    const { onChangeText } = this.props;
    onChangeText && onChangeText(val);
    if (!this.state.dirty) {
      this.setState({ dirty: true });
    }
  };

  handleBlur = () => {
    this.setState({ focused: false });
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    if (onSubmitEditing) {
      // this.handleBlur();
      onSubmitEditing();
    }
  };

  render() {
    const { focused, dirty } = this.state;
    const {
      blurOnSubmit = true,
      autoFocus = false,
      label = "",
      value = "",
      placeholder = "",
      containerStyle = {},
      inputStyle = {},
      noLabel,
      onPress,
      icon,
      secureTextEntry = false,
      autoCapitalize = "none",
      ...rest
    } = this.props;

    // const extraStyle =
    //   rest && rest.multiline
    //     ? !focused
    //       ? styles.underline
    //       : {}
    //     : styles.underline;

    if (onPress) {
      return (
        <View style={[styles.inputWrapper, containerStyle]}>
          {!!label && <Text style={styles.label}>{label}</Text>}
          <TouchableOpacity onPress={onPress}>
            <View pointerEvents="none">
              <TextInput
                autoFocus={autoFocus}
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#888"}
                style={[styles.input, inputStyle]}
                onChangeText={this.onChangeText}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onSubmitEditing={this.onSubmitEditing}
                secureTextEntry={secureTextEntry}
                blurOnSubmit={blurOnSubmit}
                {...rest}
              />
            </View>
            {!!icon && icon}
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={[styles.inputWrapper, containerStyle]}>
        {!!label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          autoFocus={autoFocus}
          autoCorrect={false}
          autoCapitalize="none"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#888"}
          style={[styles.input, inputStyle]}
          onChangeText={this.onChangeText}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onSubmitEditing={this.onSubmitEditing}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    // paddingBottom: Platform.OS === "android" ? 5 : 10
  },
  label: {
    // fontFamily: 'Cabin-Bold',
    color: "#000",
    letterSpacing: 0,
    fontSize: 14
  },
  input: {
    // fontFamily: 'Cabin-Regular',
    padding: 16,
    fontSize: 16,
    color: "#000",
    textAlignVertical: "top",
    backgroundColor: "#eee",
    borderRadius: 5
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6"
  }
});
