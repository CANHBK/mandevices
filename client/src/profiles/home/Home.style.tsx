import styled from 'styled-components';

// skills.tsx

export const Root = styled.div`
background: white;
padding-bottom:40px;
`

export const NameOfSkills = styled.div`
            font-weight: bolder;
            font-size: 20px;
            border-bottom: 1px solid #00b4d9;
            width: 100px;
            margin: 0px 20px 10px 20px;
            padding-top: 20px;
`

export const Skill = styled.div`
margin: 0px 70px;
@media (max-width:768px) {
    margin:0px 20px;
}
`

export const Name = styled.div`
color:black;
`

export const Rate1 = styled.div`
background-color: #bfc2c6;
width: 400px;
height: 5px;
border-radius: 10px;
margin:10px 0 10px 0px;
@media (max-width:768px) {
    width:100%;
}
`

export const Rate2 = styled.div`
background-color: #00b4d9;
height: 5px;
border-radius: 10px;
margin:10px 0 10px 0px;
opacity:1;
@media (max-width:768px) {
    width:100px!important;
}
`

// AboutMe.tsx

export const TitleAboutMe = styled.div`
padding:20px;
`

export const Title = styled.div`
font-weight: bolder;
font-size: 20px;
border-bottom:1px solid #00b4d9;
width: 95px;
`

export const Introduce = styled.div`
margin:20px auto;
`

export const Update = styled.div`
display:flex;
background-color: #1e1e1e;
height:80px;
border-radius:10px;
margin-top:15px;
justify-content:center;
align-items:center;
color:#fff;
box-Shadow:0.4px 2px 12px rgb(185, 181, 181);
`

// MyServices.tsx

export const TitleMyServices = styled.div`
font-weight: bolder;
font-size: 20px;
border-bottom:1px solid #00b4d9;
width: 115px;
margin-left:20px;
padding-top:20px;
`

export const Services = styled.div`
padding-bottom:30px;
margin-left:13px;
margin-right:13px;
display:flex;
flex-direction:row;
@media (max-width:1024px) {
    flex-wrap:wrap;
}
`

export const Service = styled.div`
background:white;
width:155px;
height:180px;
border-radius:10px;
margin:20px 10px;
box-Shadow:0.4px 2px 12px rgb(185, 181, 181);
@media (max-width:1024px) {
width:200px;
flex-grow:1;
height:210px;
}
`

export const Image = styled.img`
margin:25px 20px 10px 15px;
height: 50px;
width:50px;
`
export const NameOfService = styled.div`
margin:0px 15px;
color:black;
font-size: 14px;
font-weight: 500;
`

export const Detail = styled.div`
margin:0px 15px;
`