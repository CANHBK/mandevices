import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto repeat(2, 1fr);
	grid-template-rows: auto repeat(6, 1fr);
	& > div {
		border: 1px solid black;
		border-collapse: true;
	}
	.morning {
		grid-column: 2/3;
	}
	.monday {
		grid-row: 2/3;
	}
	.tuesday {
		grid-row: 3/4;
	}
	.wednesday {
		grid-row: 4/5;
	}
	.thursday {
		grid-row: 5/6;
	}
	.friday {
		grid-row: 6/7;
	}
	.saturday {
		grid-row: 7/8;
	}
	.content {
		overflow: hidden;
		position: relative;
		height: 100px;
		&:hover {
			background-color: red;
		}
	}
	.action{
		position: absolute;
		top: 0;
		bottom: 0;
		min-width: 100px;
		right: 0;
		background-color: blue;
		transform: translateX(100%);
		opacity: 0;
		transition: all ease-in 100ms;
	}
	.content:hover .action{
		opacity: 1;
		transform: translateX(0%);
	}
`;

const GuardingPresentational = () => {
	return (
		<Wrapper>
			<div className="session morning">Sáng</div>
			<div className="session afternoon">
				Chiều
			</div>
			<div className="monday">Thứ hai</div>
			<div className="tuesday">Thứ ba</div>
			<div className="wednesday">Thứ tư</div>
			<div className="thursday">Thứ năm</div>
			<div className="friday">Thứ sáu</div>
			<div className="saturday">Thứ bảy</div>
			<div className="content">
				1<div className="action">
					<FontAwesomeIcon icon="check"/>
				</div>
			</div>
			<div className="content">2</div>
			<div className="content">3</div>
			<div className="content">4</div>
			<div className="content">5</div>
			<div className="content">6</div>
			<div className="content">7</div>
			<div className="content">8</div>
			<div className="content">9</div>
			<div className="content">10</div>
			<div className="content">11</div>
			<div className="content">12</div>
		</Wrapper>
	);
};

export default GuardingPresentational;
