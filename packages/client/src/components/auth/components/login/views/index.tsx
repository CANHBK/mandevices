import React from 'react';

interface ILoginPresentational {
	onRegisterClick: () => void;
}

const LoginPresentational: React.FC<ILoginPresentational> = ({
	onRegisterClick
}) => {
	return (
		<>
			<label>Email</label>
			<input />
			<label>Mật khẩu</label>
			<input />

			<p onClick={onRegisterClick}>Đăng kí</p>
		</>
	);
};

export default LoginPresentational;
