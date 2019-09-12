import { IMemberCard } from 'components/home/components/members/controller';
import { MemberCard, Avt, Info, Icons,} from './styled';
import React from 'react';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const MemberCardPresentational: React.FC<{ member: IMemberCard }> = ({
	member
}) => {
	return (
		<MemberCard>
			<Avt>
				<img src={member.avatar} />
			</Avt>
			<Info>
			
					<div className='name'>{member.name}</div>
					<div className='course'>Khóa {member.course}</div>
					<Icons>
						<a href=""><FontAwesomeIcon  icon={faFacebookF}></FontAwesomeIcon></a>
						<a href=""><FontAwesomeIcon  icon={faEnvelope}></FontAwesomeIcon></a>
						<a href=""><FontAwesomeIcon  icon={faPhone}></FontAwesomeIcon></a>
					</Icons>
				

			</Info>


		</MemberCard>
	);
};

export default MemberCardPresentational;
