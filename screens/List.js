import { observer } from "mobx-react";
import React, { Component } from "react";
import { Text, TouchableOpacity, View, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import Padder from "../components/Padder";
import Section from "../components/Section";
import NewListItem from "../forms/NewListItem";
import appStore from "../stores/app";

@observer
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { newVisible: false };
  }

  render() {
    const listParam = this.props.navigation.getParam("list", {});
    const list = appStore.lists.find(e => e.id === listParam.id);
    const { newVisible } = this.state;
    const { items } = list;

    return (
      <View>
        <Header
          title={list.name}
          leftIcon="chevron-left"
          onLeftPress={() => {
            this.props.navigation.pop();
          }}
          rightIcon="plus"
          rightIconColor="red"
          onRightPress={() => {
            this.setState({ newVisible: true });
          }}
        />
        <Padder h={12} />
        {items &&
          items.map((e, i) => (
            <View key={e.id}>
              {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("List", { list: e });
              }}
            > */}
              <Section btw={i === 0 ? 1 : 0} bbw={1}>
                <Text>{e.name}</Text>

                <Switch
                  value={e.marked}
                  onChange={() => {
                    appStore.toggleItem(list.id, e.id);
                  }}
                />
              </Section>
              {/* </TouchableOpacity> */}
            </View>
          ))}

        <NewListItem
          visible={newVisible}
          listId={list.id}
          onRequestClose={() => {
            this.setState({ newVisible: false });
          }}
        />
      </View>
    );
  }
}

export default List;
