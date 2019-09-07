import React from 'react';
import { IconBrands } from './ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const IconBrandsPresentations = () => {
	return (
		<IconBrands>
			<ul>
				<li>
					<FontAwesomeIcon
						icon={
							faFacebook
						}
					/>
				</li>
				<li>
					<FontAwesomeIcon
						icon={
							faTwitter
						}
					/>
				</li>
				<li>
					<FontAwesomeIcon
						icon={
							faEnvelope
						}
					/>
				</li>
				<li>
					<FontAwesomeIcon
						icon={
							faHeadphones
						}
					/>
				</li>
			</ul>
		</IconBrands>
	);
};
export default IconBrandsPresentations;
