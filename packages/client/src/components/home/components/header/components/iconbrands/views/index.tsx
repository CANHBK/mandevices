import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconBrands } from './ui';
import Item from 'antd/lib/list/Item';
import { Menu } from 'antd';
import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const IconBrandsPresentations = () => {
	return (
		
			<Menu mode="horizontal">
				<Item>
					<FontAwesomeIcon
						icon={
							faFacebook
						}
					/>
				</Item>
				<Item>
					<FontAwesomeIcon
						icon={
							faTwitter
						}
					/>
				</Item>
				<Item>
					<FontAwesomeIcon
						icon={
							faEnvelope
						}
					/>
				</Item>
				<Item>
					<FontAwesomeIcon
						icon={
							faHeadphones
						}
					/>
				</Item>
			</Menu>
		
	);
};
export default IconBrandsPresentations;
