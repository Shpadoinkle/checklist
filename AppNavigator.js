import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./screens/Main";
import List from "./screens/List";

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        headerShown: false
      }
    }
  })
);
