import './index.css';

import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import App from './controller';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { client } from './apollo';
import { theme } from 'theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApolloProvider>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
