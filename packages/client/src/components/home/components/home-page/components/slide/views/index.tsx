import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';

const SlidePresentations = () => {
	return (
		<CustomCarousel autoplay>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
		</CustomCarousel>
	);
};
export default SlidePresentations;

const CustomCarousel = styled(Carousel)`
	.slick-slide {
		text-align: center;
		height: 160px;
		line-height: 160px;
		background: #364d79;
		overflow: hidden;
	}

	.slick-slide h3 {
		color: #fff;
	}
`;
