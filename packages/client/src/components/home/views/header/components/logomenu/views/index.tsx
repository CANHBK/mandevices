import React from 'react';
import imglogo from '../asset/firefox_logos.0.png'
import { LogoMenu } from './ui';

const LogoMenuPresentations = () => {
	return (<LogoMenu>
				<div>
					<img
						src={
							imglogo
						}
					/>
					<span>Fifox</span>
				</div>
			</LogoMenu>
    )
}
export default LogoMenuPresentations;