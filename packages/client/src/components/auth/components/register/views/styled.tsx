import styled from 'styled-components/macro';

export const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
`

export const BorderOfRegister = styled.div`
width:400px;
height:450px;
border-radius:20px;
box-Shadow:0.4px 2px 12px rgb(185, 181, 181);
`

export const Register = styled.div`
padding:20px 30px 0px 30px;
`

export const H2 = styled.h2`
text-align:center;
padding:10px;
color:#1890ff;
`

export const NameAndCourse = styled.div`
position:relative;
`

export const InputForm = styled.div`
padding-bottom:10px;
`

export const Label = styled.div`
padding-top:5px;
padding-right:5px;
`

export const ErrorMessage = styled.div`
font-size:13px;
color:red;
`