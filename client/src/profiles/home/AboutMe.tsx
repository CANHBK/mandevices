import React from 'react';
import {TitleAboutMe, Title, Introduce} from './Home.style';

interface MyOwnProps {
    seftIntroduce: string
}

const AboutMe:React.FC<MyOwnProps> = ({seftIntroduce}) => {

    return (
        <TitleAboutMe>
            <Title>About Me</Title>
            <Introduce>{seftIntroduce}</Introduce>
        </TitleAboutMe>
    )
}

export default AboutMe;