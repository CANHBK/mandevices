import React from 'react';
import { Row, Col } from 'antd';
import ProfileHome from './profiles/home';
import ProfileNavigations from './profiles/navigations';
import Personal from './profiles/personals';

const App: React.FC = () => {
	return (
		<Row
			gutter={24}
			justify="center"
			type="flex"
			style={{ marginTop: '36px' }}
		>
			<Col span={5}>
				<Personal />
			</Col>
			<Col span={13}>
				<Row
					style={{
						marginBottom:
							'24px'
					}}
				>
					<ProfileNavigations />
				</Row>
				<Row>
					<ProfileHome />
				</Row>
			</Col>
		</Row>
	);
};

export default App;
