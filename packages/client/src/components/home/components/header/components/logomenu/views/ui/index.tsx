import styled from "../../../../../../../../theme-styled-component";

export const LogoMenu = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Pacifico&display=swap');
	flex: 3;
	& > div {
		display: flex;
		align-items: center;
		img {
			width: 20%;
			height: 20%;
		}
		span {
			font-family: 'Pacifico', cursive;
			font-size: 2em;
			color: #e67e22;
		}
	}
`;