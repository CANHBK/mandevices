import { Col, Row } from 'antd';

import Container from 'shared/Container';
import { IMemberCard } from '../controller';
import MememberCardComponent from './components/member-card';
import React from 'react';

const MembersPresentational: React.FC<{ members: IMemberCard[] }> = ({
	members
}) => {
	return (
		<Container>
			danh sach thanh vien
			<Row type="flex" justify="start">
				{members.map(member => (
					<Col span={6}>
						<MememberCardComponent
							member={
								member
							}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default MembersPresentational;
