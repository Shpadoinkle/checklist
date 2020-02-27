import { observer } from "mobx-react";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Padder from "../components/Padder";
import Section from "../components/Section";

@observer
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { newVisible: false };
  }

  render() {
    const list = this.props.navigation.getParam("list", {});

    return (
      <View>
        <Padder h={30} />
        <Section>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.pop();
            }}
          >
            <Icon name="chevron-left" color="black" />
          </TouchableOpacity>
          <Text>{list.name}</Text>
          <Icon name="plus" color="white" />
        </Section>
        <Padder h={12} />
      </View>
    );
  }
}

export default List;
