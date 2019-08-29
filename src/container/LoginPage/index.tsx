import * as React from "react";
// import { View } from "native-base";
import { Text, View,Button } from 'native-base';
// import { observer, inject } from "mobx-react/native";
import { createStackNavigator, createAppContainer } from 'react-navigation';




// export interface Props {
// 	navigation: any,
// 	mainStore: any,
// }
// export interface State {}

// @inject("mainStore")
// @observer
export default class LoginPage extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, world!</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text> Dark </Text>
            </Button>
             <Button dark></Button>
          </View>
        );
      }
}
