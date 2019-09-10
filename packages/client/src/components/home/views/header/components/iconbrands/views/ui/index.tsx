import styled from "styled-components/macro";

export const IconBrands = styled.div`
	flex: 2;
	ul {
		height: 100%;
		justify-content: space-evenly;
		align-items: center;
	}
	li {
		color: black;
		margin-right: -3em;
		&:hover {
			color: #d35400;
			cursor: pointer;
		}
	}
`;