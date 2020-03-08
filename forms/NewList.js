import React, { Component } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import uuid from "uuid";
import Button from "../components/Button";
import GenericInput from "../components/GenericInput";
import Padder from "../components/Padder";
import Colors from "../constants/Colors";
import appStore from "../stores/app";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  saveList = () => {
    const { text } = this.state;
    const { onRequestClose, navigation } = this.props;
    const newList = { id: uuid(), name: text, items: [] };
    appStore.addList(newList);
    this.setState({ text: "" });
    navigation.navigate("List", { list: newList });
    onRequestClose();
  };

  render() {
    const { visible, onRequestClose } = this.props;
    const { text } = this.state;

    return (
      <Modal transparent visible={visible} onRequestClose={onRequestClose}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: 40
          }}
          onPress={onRequestClose}
        >
          <View
            style={{
              width: "100%",
              padding: 20,
              backgroundColor: Colors.BACKGROUND_COLOR,
              borderRadius: 10
            }}
          >
            <GenericInput
              autoFocus={visible}
              value={text}
              placeholder="List Name"
              onChangeText={e => this.setState({ text: e })}
              onSubmitEditing={this.saveList}
              autoCapitalize="sentences"
            />
            <Padder h={20} />
            <Button onPress={this.saveList} text="Save List" />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default NewList;
