import { observer } from "mobx-react";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Padder from "../components/Padder";
import Section from "../components/Section";
import NewList from "../forms/NewList";
import appStore from "../stores/app";

@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { newVisible: false };
  }

  render() {
    const { newVisible } = this.state;
    const { lists } = appStore;

    return (
      <View>
        <Padder h={30} />
        <Section>
          <Icon name="plus" color="white" />
          <Text>List App</Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({ newVisible: true });
            }}
          >
            <Icon name="plus" color="red" />
          </TouchableOpacity>
        </Section>
        <Padder h={12} />
        {lists.map(e => (
          <View key={e.id}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("List", { list: e });
              }}
            >
              <Section>
                <Text>{e.name}</Text>
                <Icon name="chevron-right" color="black" />
              </Section>
            </TouchableOpacity>
            <Padder h={16} />
          </View>
        ))}

        <NewList
          visible={newVisible}
          onRequestClose={() => {
            this.setState({ newVisible: false });
          }}
        />
      </View>
    );
  }
}

const styles = {
  sectionWrapper: {
    padding: 20
  }
};

export default Main;
