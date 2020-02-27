import { Provider } from "mobx-react";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./AppNavigator";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
