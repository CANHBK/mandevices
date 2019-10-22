import { Button } from 'antd';
import { device } from 'theme';
import logo from 'assets/logo.png';
import styled from 'styled-components/macro';

export const FormWrapper = styled.div`
	width: 100%;
	@media ${device.mobileL} {
		width: 400px;
	}

	background-color: white;
	padding: 20px;
	border-radius: 10px;
`;

export const AuthPage = styled.div`
	background-color: #fafbfe;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Logo = styled.div`
	background-image: url(${logo});
	padding-bottom: 20px;
	background-position: center;
	width: 100%;
	height: 100px;
	background-origin: content-box;
	background-size: contain;
	background-repeat: no-repeat;
`;

export const AuthButton = styled(Button)`
	width: 100%;
`;

export const AuthRedirect = styled.div`
	cursor: pointer;
	text-align: center;
	margin-top: 20px;
`;