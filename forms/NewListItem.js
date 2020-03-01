import React, { Component } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Alert
} from "react-native";

import GenericInput from "../components/GenericInput";
import Button from "../components/Button";
import Padder from "../components/Padder";
import uuid from "uuid";
import appStore from "../stores/app";

class NewListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  /**
     * 
     * 
     *   Alert.alert(
      'Decline Order',
      'Are you sure you want to decline this order?',
      [
        {
          text: 'No',
          // onPress: () => {
          //   this.declineOrder()
          // },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: this.declineOrder,
        },
      ],
      {cancelable: true}
    )
     */

  saveList = () => {
    const { text } = this.state;
    const { onRequestClose, listId } = this.props;

    if (!listId) {
      Alert.alert("No List Id detected");
      return;
    }
    appStore.addListItem(listId, {
      id: uuid(),
      name: text,
      marked: false
    });
    this.setState({ text: "" });
    // onRequestClose();
  };

  render() {
    const { visible, onRequestClose, listId } = this.props;
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
              backgroundColor: "#fff",
              borderRadius: 10
            }}
          >
            <GenericInput
              autoFocus={visible}
              value={text}
              placeholder="Item Name"
              onChangeText={e => this.setState({ text: e })}
              onSubmitEditing={this.saveList}
              autoCapitalize="sentences"
              blurOnSubmit={false}
            />
            <Padder h={20} />
            <Button onPress={this.saveList} text="Save Item" />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default NewListItem;
