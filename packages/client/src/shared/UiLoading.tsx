import BarLoader from 'react-spinners/BarLoader';
import React from 'react';

interface ICProps {
	className?: string;
}
const C: React.FC<ICProps> = () => {
	return <BarLoader widthUnit="%" width={100} />;
};

// const box1 = keyframes`
// 	0%{
// 		left: -35%;
// 		right: 100%;
// 	}
// 	60%,100%{
// 		left: 100%;
// 		right: -90%;
// 	}
// `;

// const Loading = styled(C)`
// 	background-color: #acece6;
// 	height: 4px;
// 	overflow: hidden;
// 	& div:before {
// 		content: '';
// 		background-color: #26a69a;
// 		position: absolute;
// 		top: 0px;
// 		left: 0px;
// 		bottom: 0px;
// 		animation: ${box1} 2100ms
// 			cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;
// 	}
// `;

export default C;
