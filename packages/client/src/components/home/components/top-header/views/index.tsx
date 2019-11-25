import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface ITopHeaderPresentational {
	onLoginClick: () => void;
	isLogin: boolean;
	onLogoutClick: () => void;
	onRegisterClick: () => void;
}
const TopHeaderPresentational: React.FC<ITopHeaderPresentational> = ({
	onLoginClick,
	isLogin = false,
	onLogoutClick,
	onRegisterClick
}) => {
	const handleLogin = () => {
		onLoginClick();
	};
	

	return (
		<TopHeader>
			{isLogin ? (
				<Button
					type="link"
					ghost
					onClick={
						onLogoutClick
					}
				>
					Đăng xuất
				</Button>
			) : (
				<>
					<Button
						ghost
						icon="login"
						type="link"
						onClick={
							handleLogin
						}
					>
						Đăng
						nhập
					</Button>
					<Button
						onClick={
							onRegisterClick
						}
						icon="scan"
						ghost
						type="link"
					>
						Đăng kí
					</Button>
				</>
			)}
		</TopHeader>
	);
};

export default TopHeaderPresentational;

const TopHeader = styled.div`
	background-color: #40a9ff;
	display: flex;
	justify-content: flex-end;
`;
