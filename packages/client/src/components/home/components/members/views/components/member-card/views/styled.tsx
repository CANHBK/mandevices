import styled from 'styled-components/macro';

export const MemberCard = styled.div`
	margin: 20px;
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Avt = styled.div`
display: flex;
justify-content: center;
img{
width: 90%;
height: 90%;
}`

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
padding: 10px;
background-color: #FFF;
box-sizing: content-box;
border-radius: 10px;
width: 70%;
transform: translateY(-50%);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
.name{
	font-size: 20px;
	font-weight: 900;
}
.course{
	font-size:14px;
	font-weight: lighter;
	color: #339EFF;
}
`

export const Icons = styled.div`
a{
	padding: 15px;
	font-size: 14px;
	width: 20px;
	height: 20px;
	display: inline-flex;
	flex-direction: row;
	justify-content:center;
	align-items: center;
	border-radius: 50%;
	color: #FFF;
	background-color: #339EFF;
	margin:5px;
}

`
