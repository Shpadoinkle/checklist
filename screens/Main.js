import { observer } from "mobx-react";
import React, { Component } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import Padder from "../components/Padder";
import Section from "../components/Section";
import NewList from "../forms/NewList";
import appStore from "../stores/app";
import { PADDING_HORIZONTAL } from "../constants/Values";

@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { newVisible: false };
  }

  render() {
    const { newVisible } = this.state;
    const { lists } = appStore;
    const { navigation } = this.props;

    return (
      <View>
        <Header
          title="List App"
          rightIcon="plus"
          rightIconColor="red"
          onRightPress={() => {
            this.setState({ newVisible: true });
          }}
        />

        <Padder h={12} />
        {lists.map(e => {
          const { items } = e;
          const length = items.length;
          const marked = items.filter(e => e.marked).length;

          return (
            <View key={e.id}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("List", { list: e });
                }}
              >
                <Section btw={1} bbw={1} containerStyle={{ paddingRight: 0 }}>
                  <Text>{e.name}</Text>
                  <View style={styles.tallyWrapper}>
                    <Text
                      style={{
                        color:
                          length > 0 && length === marked ? "green" : "black",
                        fontWeight:
                          length > 0 && length === marked ? "700" : "400"
                      }}
                    >
                      ({marked}/{length})
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          "Remove List?",
                          "Are you sure you want to remove this list?",
                          [
                            {
                              text: "No",
                              // onPress: () => {
                              //   this.declineOrder()
                              // },
                              style: "cancel"
                            },
                            {
                              text: "Yes",
                              onPress: () => {
                                appStore.removeList(e.id);
                              }
                            }
                          ],
                          { cancelable: true }
                        );
                      }}
                      style={{ paddingHorizontal: PADDING_HORIZONTAL }}
                    >
                      <Icon name="times" color="black" />
                    </TouchableOpacity>
                  </View>
                </Section>
              </TouchableOpacity>
              <Padder h={8} />
            </View>
          );
        })}

        <NewList
          navigation={navigation}
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
  },
  tallyWrapper: {
    flexDirection: "row",
    alignItems: "center"
  }
};

export default Main;
