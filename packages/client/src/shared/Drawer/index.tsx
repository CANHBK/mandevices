import { device } from 'theme';
import styled from 'styled-components/macro';

export const DrawerArea = styled.div`
	position: absolute;
	left: 16px;
	@media ${device.laptop} {
		display: none;
	}
`;
