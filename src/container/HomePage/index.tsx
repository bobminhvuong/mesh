import * as React from "react";
import { View,Text } from "native-base";
// import { Text, View } from 'react-native';
// import { observer, inject } from "mobx-react/native";

// export interface Props {
// 	navigation: any,
// 	mainStore: any,
// }
// export interface State {}

// @inject("mainStore")
// @observer
export default class HomePage extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home</Text>
          </View>
        );
      }
}
