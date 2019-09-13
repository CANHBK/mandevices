import React from 'react';
import {Root, Skill, NameOfSkills, Name, Rate1, Rate2} from './styled';

interface MyOwnsprops {
    nameOfSkills: string,
    skills: any
}

const Skills:React.FC<MyOwnsprops> = ({nameOfSkills, skills}) => {

    return (
        <Root>
            <NameOfSkills lengthOfName={nameOfSkills}></NameOfSkills>
            <Skill>
                {
                    skills.map((x: any) => (<div>
                        <Name>{x.name}</Name>
                        <Rate1><Rate2 style = {{width : x.rate}}></Rate2></Rate1>
                    </div>))
                }
            </Skill>
        </Root>
    )
}


export default Skills;