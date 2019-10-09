import * as React from "react";

import {
	createAppContainer,
	createDrawerNavigator,
	createSwitchNavigator
} from 'react-navigation';

import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationScreen } from './authentication/Authentication.index';
import HomeScreen from './home/Home.index';
import { client } from "./apollo";

// import { Routes } from "./routes";


const AppDrawerNavigator = createDrawerNavigator({
	Home: HomeScreen
});

const AppSwitchNavigator = createSwitchNavigator({
	Authentication: AuthenticationScreen,
	Home: createAppContainer(AppDrawerNavigator)
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}