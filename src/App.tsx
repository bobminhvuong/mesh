import React from "react";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import LoginPage from "./container/LoginPage";
import HomePage from "./container/HomePage";

// const Drawer = createDrawerNavigator(
//   {
//     Home: { screen: Login }
//   },
//   {
//     drawerWidth: deviceWidth - 50,
//     drawerPosition: "left",
//     contentComponent: props => <Sidebar {...props} />
//   }
// );
const RootStack = createStackNavigator(
    {
        LoginPage: LoginPage,
        HomePage: HomePage
      },
      {
        initialRouteName: "LoginPage",
        headerMode: 'none',
      }
  );
const App = createAppContainer(RootStack);

export default () => (
    <Root>
        <App />
    </Root>
);
