import React from 'react';
import { TitleBiography, Li, NameOfTimeLine, PeriodOfTime, ContentOfTimeLine, DetailOfTimeLine, ImgOfBiography } from './styled';
import img from './bachkhoa.jpg';
import hanquoc from './hanquocs.jpg';
import google from './google2.jpeg';

const Biography:React.FC = () => {
    return (
        <div style = {{backgroundColor: '#fafafa'}}>
            <TitleBiography>Biography</TitleBiography>
            <Li>
                <ImgOfBiography src={img}></ImgOfBiography>
                <ContentOfTimeLine>
                    <NameOfTimeLine>Bách Khoa Hà Nội University</NameOfTimeLine>
                    <PeriodOfTime>2015 - 2020</PeriodOfTime>
                    <DetailOfTimeLine>trong 5 năm học em đã ra trường với lượng tín chỉ vượt qua là 69 tín với lương kiến thức tương đối lớn về Iot tuổi thanh xuân vốn dĩ là để bỏ lỡ, nàng ra đi mang theo một phần trái tim của tôi để lại lỗ hổng cứ mãi rỉ máu cho đến giờ  </DetailOfTimeLine>
                </ContentOfTimeLine>
            </Li>
            <Li>
                <ImgOfBiography src={hanquoc}></ImgOfBiography>
                <ContentOfTimeLine>
                    <NameOfTimeLine>Tongwon university in korea</NameOfTimeLine>
                    <PeriodOfTime>2020 - 2022</PeriodOfTime>
                    <DetailOfTimeLine>trong 5 năm học em đã ra trường với lượng tín chỉ vượt qua là 69 tín với lương kiến thức tương đối lớn về Iot níu kéo sao được khi trong tay người đàn ông chẳng có gì, trưởng thành cũng không nốt nó có lẽ sẽ trở thành vết thương đến cuối đời của chính tôi </DetailOfTimeLine>
                </ContentOfTimeLine>
            </Li>
            <Li style={{borderLeft:'none'}}>
                <ImgOfBiography src={google}></ImgOfBiography>
                <ContentOfTimeLine>
                    <NameOfTimeLine>Google Singapore</NameOfTimeLine>
                    <PeriodOfTime>2022 - 2023</PeriodOfTime>
                    <DetailOfTimeLine>trong 5 năm học em đã ra trường với lượng tín chỉ vượt qua là 69 tín với lương kiến thức tương đối lớn về Iot có lẽ đây đã là hồi kết cho cuộc tình đó, dẫu đã nói không bao giờ hối hận nhưng nhận ra làm sao có thể không hối hận được  </DetailOfTimeLine>
                </ContentOfTimeLine>
            </Li>
        </div>
    )
}

export default Biography;