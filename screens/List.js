import { observer } from "mobx-react";
import React, { Component } from "react";
import { Alert, ScrollView, Switch, Text, View } from "react-native";
import Header from "../components/Header";
import Padder from "../components/Padder";
import PlusButton from "../components/PlusButton";
import ScreenWrapper from "../components/ScreenWrapper";
import Section from "../components/Section";
import Colors from "../constants/Colors";
import NewListItem from "../forms/NewListItem";
import appStore from "../stores/app";

@observer
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemVisible: false,

      options: [
        {
          label: "Delete List",
          action: () => {
            Alert.alert("yes");
          }
        }
      ]
    };
  }

  render() {
    const listParam = this.props.navigation.getParam("list", {});
    const list = appStore.lists.find(e => e.id === listParam.id);
    const { newItemVisible } = this.state;
    const { items } = list;

    return (
      <ScreenWrapper>
        <Header
          title={list.name}
          leftIcon="chevron-left"
          leftIconColor={Colors.BRANDING_PRIMARY}
          onLeftPress={() => {
            this.props.navigation.pop();
          }}
          // rightComponent={<Dropdown />}
          // rightIcon="plus"
          // rightIconColor="red"
          // onRightPress={() => {
          //   this.setState({ newItemVisible: true });
          // }}
        />
        <ScrollView>
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
                    trackColor={{
                      true: Colors.BRANDING_PRIMARY
                    }}
                  />
                </Section>
                {/* </TouchableOpacity> */}
              </View>
            ))}
        </ScrollView>
        <PlusButton
          onPress={() => {
            this.setState({ newItemVisible: true });
          }}
        />
        <NewListItem
          visible={newItemVisible}
          listId={list.id}
          onRequestClose={() => {
            this.setState({ newItemVisible: false });
          }}
        />
      </ScreenWrapper>
    );
  }
}

export default List;
