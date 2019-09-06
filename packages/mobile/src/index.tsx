import * as React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import { Routes } from "./routes";
import { client } from "./apollo";
import {
	createSwitchNavigator,
	createAppContainer,
	createDrawerNavigator
} from 'react-navigation';
import { AuthenticationScreen } from './authentication/Authentication.index';
import HomeScreen from './home/Home.index';



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