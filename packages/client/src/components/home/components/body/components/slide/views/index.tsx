import React from 'react';
import img_1 from '../asset/1.jpg';
import img_2 from '../asset/2.jpg';
import img_3 from '../asset/3.jpg';
import img_4 from '../asset/4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
	SlideImage,
	ArrowCircle,
} from './ui';
const SlidePresentations = () => {
	return (
        <SlideImage>
					<div>
						<ul>
							<li>
								<FontAwesomeIcon
									icon={
										faAngleLeft
									}
								/>
							</li>

							<li>
								<FontAwesomeIcon
									icon={
										faAngleRight
									}
								/>
							</li>
						</ul>
					</div>
					<ArrowCircle>
						<ol>
							<li>
								<FontAwesomeIcon
									icon={
										faCircle
									}
								/>
							</li>
							<li>
								<FontAwesomeIcon
									icon={
										faCircle
									}
								/>
							</li>
							<li>
								<FontAwesomeIcon
									icon={
										faCircle
									}
								/>
							</li>
							<li>
								<FontAwesomeIcon
									icon={
										faCircle
									}
								/>
							</li>
						</ol>
					</ArrowCircle>

					<div>
						<img
							src={
								img_1
							}
						></img>
						<img
							src={
								img_2
							}
						></img>
						<img
							src={
								img_3
							}
						></img>
						<img
							src={
								img_4
							}
						></img>
					</div>
				</SlideImage>
    )
};
export default SlidePresentations;