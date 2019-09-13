import React from 'react';

interface IRegisterPresentational {
	courses: number[];
	onLoginClick: () => void;
}

const RegisterPresentational: React.FC<IRegisterPresentational> = ({
	courses,
	onLoginClick
}) => {
	return (
		<>
			<label>Họ và tên</label>
			<input />
			<label>Email</label>
			<input />
			<label>Khóa</label>
			<select>
				{courses.map((course, idx) => (
					<option key={idx}>
						{course}
					</option>
				))}
			</select>
			<label>Mật khẩu</label>
			<input />
			<label>Nhập lại mật khẩu</label>
			<input />
			<p onClick={onLoginClick}>
				Đã có tài khoản, đăng nhập
			</p>
		</>
	);
};

export default RegisterPresentational;
