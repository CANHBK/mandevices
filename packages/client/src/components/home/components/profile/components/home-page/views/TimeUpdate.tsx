import React from 'react';
import {Update} from './styled';

interface MyOwnsProps {
    timeUpdate:string
}

const TimeUpdate:React.FC<MyOwnsProps> = ({timeUpdate}) => {
    return (
        <Update>Last update : {timeUpdate}</Update>
    )
}

export default TimeUpdate;