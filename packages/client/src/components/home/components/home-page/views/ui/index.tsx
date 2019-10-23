import { device } from 'theme';
import styled from 'styled-components/macro';

export const BodyArea = styled.div`
	@media ${device.laptop} {
		width: 80%;
		margin-top: 2rem;
	}
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	overflow: hidden;
`;
