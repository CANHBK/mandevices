import { Button } from 'antd';
import React from 'react';

interface ITopHeaderPresentational {
	onLoginClick: () => void
}
const TopHeaderPresentational: React.FC<ITopHeaderPresentational> = ({onLoginClick}) => {
	return (
		<div>
			<Button onClick={onLoginClick}>Đăng nhập</Button>
		</div>
	);
};

export default TopHeaderPresentational;
