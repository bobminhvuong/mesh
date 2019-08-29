import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from "mobx-react";
import { StyleProvider } from "native-base";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";

export interface Props {}
export interface State {
    isReady: boolean;
}
export default function(stores) {
	return class Setup extends React.Component<Props, State> {
        constructor(props) {
            super(props);
            this.state = {
              isReady: false,
            };
          }
        
          async componentDidMount() {
            await Font.loadAsync({
              Roboto: require('native-base/Fonts/Roboto.ttf'),
              Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
              ...Ionicons.font,
            });
            this.setState({ isReady: true });
          }

		render() {
            if (!this.state.isReady) {
                return <AppLoading />;
              }
          
			return (
				<StyleProvider style={getTheme(variables)}>
					<Provider {...stores}>
						<App />
					</Provider>
				</StyleProvider>
			);
		}
	};
}
