import styled from 'styled-components/macro';

export const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
`

export const BorderOfLogin = styled.div`
width:350px;
height:400px;
border-radius:20px;
box-Shadow:0.4px 2px 12px rgb(185, 181, 181);
`

export const Login = styled.div`
padding:20px 30px;
`

export const H2 = styled.h2`
text-align:center;
padding:10px;
color:#1890ff;
`
export const InputForm = styled.div`
padding-bottom:20px;
`

export const RememberAndForgot = styled.div`
display: flex;
justify-content:space-between;
padding-bottom:20px;
margin-top:30px;
`

export const ErrorMessage = styled.div`
font-size:13px;
color:red;
`