import styled from 'styled-components/macro';

export const Header = styled.header`
	position: relative;
	max-width: 100%;
	display: flex;
	align-items: center;
	min-height: ${props => props.theme.dimension.appBar};
	box-shadow: 0 2px 8px #f0f1f2;
`;
