import { Provider } from "mobx-react";
import React from "react";
import { View } from "react-native";
import AppNavigator from "./AppNavigator";

export default function App() {
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </Provider>
  );
}
