import React from 'react';

interface ITopHeaderPresentational {
	onLoginClick: () => void;
	isLogin: boolean;
	onLogoutClick :()=>void;
}
const TopHeaderPresentational: React.FC<ITopHeaderPresentational> = ({
	onLoginClick,
	isLogin = false,
	onLogoutClick
}) => {
	const handleLogin = () => {
		onLoginClick();
	};

	return (
		<>
			{isLogin ? (
				<button onClick={onLogoutClick}>Đăng xuất</button>
			) : (
				<button onClick={handleLogin}>
					Đăng nhập
				</button>
			)}
		</>
	);
};

export default TopHeaderPresentational;
