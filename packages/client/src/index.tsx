import './index.css';

import * as serviceWorker from './serviceWorker';

import React, { useContext, useReducer } from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import App from './controller';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { client } from './apollo';
import { theme } from 'theme';

const initialState = {
	isLogin: false
};
const Context = React.createContext({});

const reducer = (state: typeof initialState, action: any) => {
	switch (action) {
		default:
			return state;
	}
};


export const StateProvider: React.FC<{
	reducer: typeof reducer;
	initialState: typeof initialState;
}> = ({ reducer, initialState, children }) => (
	<Context.Provider value={useReducer(reducer, initialState)}>
		{children}
	</Context.Provider>
);
export const useStateValue = () => useContext(Context);

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ApolloProvider client={client}>
			<StateProvider
				reducer={reducer}
				initialState={initialState}
			>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</StateProvider>
		</ApolloProvider>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
