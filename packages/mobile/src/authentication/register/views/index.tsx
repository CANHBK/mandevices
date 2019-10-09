import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import React, { useState } from 'react';

import { Button } from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput`
	border: red;
	width: 100%;
	border-radius: 10px;
	padding: 0 10px;
`;

const RegisterView = styled.View`
	width: 100%;
	padding: 0 20px;
`;

const Register: React.FC<NavigationInjectedProps> = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const onEmailChange = (email: string) => setEmail(email);
	return (
		<RegisterView>
			<Input
				placeholder="Email"
				onChangeText={onEmailChange}
				value={email}
			/>
			<Button
				title="Đăng kí"
				onPress={() => {
					navigation.navigate(
						'Home'
					);
				}}
			/>
		</RegisterView>
	);
};

export default withNavigation(Register);
