import { createGlobalStyle } from '../theme-styled-component';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,800&display=swap&subset=vietnamese');
*,h2{
	box-sizing:border-box;
	margin:0;
	margin-bottom: 0;
	padding:0;
	font-family: 'Nunito', sans-serif;

}

body p{
	margin-bottom: 0;
}

a {
	text-decoration:none;
}

input:focus,textarea:focus{
	outline:none;
}

img{
	width: 100%;

}

html,body,#root{
	height: 100%;
}
`;
