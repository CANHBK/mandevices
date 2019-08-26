import React from 'react';
import { Box } from '../../shared/Box';
import AboutMe from './AboutMe';
import Skills from './Skills';
import TimeUpdate from './TimeUpdate';
import MyServices from './MyServices';
import img from './html.svg';

const ProfileHome:React.FC = () => {

	return (<div>
		<Box style = {{border: 'none',
			borderRadius: '10px',
			boxShadow:'0.4px 2px 12px rgb(185, 181, 181)'}}>
			<AboutMe seftIntroduce='Started earnest brother believe an exposend so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. 

Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.' />
			<MyServices services = {[{name: 'Web Development', detail: 'vừa học đc 2 tháng một con vit xòe ra 2 cái cánh', image:img},{name: 'Web Development', detail: 'vừa học đc 2 tháng một con vit xòe ra 2 cái cánh', image:img},,{name: 'Web Development', detail: 'vừa học đc 2 tháng một con vit xòe ra 2 cái cánh', image:img},,{name: 'Web Development', detail: 'vừa học đc 2 tháng một con vit xòe ra 2 cái cánh', image:img}]}></MyServices>
			<Skills nameOfSkills = {'Code Skill'} skills = {[{name : 'javascript',rate : '300px'},{name : 'html',rate : '200px'},{name : 'CSS',rate : '100px'}]} />
			<Skills nameOfSkills = {'Code Skill'} skills = {[{name : 'javascript',rate : '300px'},{name : 'html',rate : '200px'},{name : 'CSS',rate : '100px'}]} />
		</Box>
		<TimeUpdate timeUpdate = '2:22PM 26/8/2019'></TimeUpdate>
	</div>
		
	)
}

export default ProfileHome
