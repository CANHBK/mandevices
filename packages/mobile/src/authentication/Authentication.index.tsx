import { StyleSheet, Text, View } from 'react-native';

import Container from '../../shared/Container';
import React from 'react';
import Register from './register';
import styled from "styled-components/native"

const Title = styled.Text`
	color: red;
`



export const AuthenticationScreen=() => {
	return (
		<Container >
			<Title>Mandevices</Title>
			<Register />
		</Container>
	);
};