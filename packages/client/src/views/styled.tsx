import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');
*,h2{
	box-sizing:border-box;
	margin:0;
	margin-bottom: 0;
	padding:0;
	font-family: 'Fira Sans', sans-serif;

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
body{
    margin:0px;
}
ul{
    padding:0px;
    list-style: none;
    display: flex;
    margin:0;
}
ol{
    padding:0;
    margin:0;
}
`;
