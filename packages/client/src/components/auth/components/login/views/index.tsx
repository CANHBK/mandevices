import {
	AuthButton,
	AuthPage,
	AuthRedirect,
	FormWrapper,
	Logo
} from '../../shared';
import { Form, notification } from 'antd';
import React, { useEffect } from 'react';

import { ApolloError } from 'apollo-client';
import { Formik } from 'formik';
import { Input } from '@jbuschke/formik-antd';
import Loading from 'shared/UiLoading';
import { LoginSchema } from 'components/auth/common';

const { Item } = Form;

interface ILoginPresentational {
	onLogin: (email: string, password: string) => void;
	onRedirectToRegister?: () => void;
	loading?: boolean;
	error?: ApolloError | undefined;
}

const LoginPresentational: React.FC<ILoginPresentational> = ({
	onLogin,
	loading = false,
	onRedirectToRegister,
	error
}) => {
	useEffect(() => {
		if (error) {
			notification.error({
				message: error.message,
				duration: 0
			});
		}
	}, [error]);
	return (
		<AuthPage>
			<FormWrapper>
				<Logo />
				<Formik
					initialValues={{
						email:
							'',
						password:
							''
					}}
					onSubmit={({
						email,
						password
					}) => {
						onLogin(
							email,
							password
						);
					}}
					validationSchema={
						LoginSchema
					}
				>
					{({
						errors,
						handleSubmit
					}) => (
						<Form
							onSubmit={
								handleSubmit
							}
						>
							{console.log(
								'errors',
								errors
							)}
							<Item
								validateStatus={
									errors.email
										? 'error'
										: 'success'
								}
								help={
									errors.email
								}
							>
								<Input
									placeholder="Email"
									name="email"
									type="email"
								/>
							</Item>
							<Item
								validateStatus={
									errors.password
										? 'error'
										: 'success'
								}
								help={
									errors.password
								}
							>
								<Input
									placeholder="Mật khẩu"
									name="password"
									type="password"
								/>
							</Item>

							<AuthButton
								loading={
									loading
								}
								type="primary"
								htmlType="submit"
							>
								Đăng
								nhập
							</AuthButton>
						</Form>
					)}
				</Formik>

				<AuthRedirect
					onClick={
						onRedirectToRegister
					}
				>
					Chưa có tài khoản?
					Đăng kí
				</AuthRedirect>
			</FormWrapper>
		</AuthPage>
	);
};

export default LoginPresentational;
