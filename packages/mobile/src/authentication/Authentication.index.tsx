import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Register from './register';
import Container from '../../shared/Container';

export const AuthenticationScreen=() => {
	return (
		<Container >
			<Text>Mandevices</Text>
			<Register />
		</Container>
	);
};