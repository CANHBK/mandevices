import React from 'react';
import {BodyArea} from './ui';
import Slide from '../components/slide/views';
import Introduce from '../components/introduce/views'
import Service from '../components/services/views'

const BodyPresentations = () => {
	return (
		<React.Fragment>
			<BodyArea>
				<Slide/>
				<Introduce/>
			</BodyArea>
			<Service/>
		</React.Fragment>
	);
};
export default BodyPresentations;
