import logo from 'assets/logo.png';
import styled from "styled-components/macro"

export const HeaderLogo = styled.div`
	background-image: url(${logo});
	background-size: contain;
	background-repeat: no-repeat;
	flex: 1;
	align-self: stretch;
	padding: 5px 20px;
	background-origin: content-box;
	background-position: center;
`;
