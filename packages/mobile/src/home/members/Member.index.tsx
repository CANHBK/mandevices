import React from 'react';
import { Text, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Container from '../../../shared/Container';
import Details from './details';
import { withNavigation } from 'react-navigation';
import { NavigationInjectedProps } from 'react-navigation';
import HumbergerIcon from '../../../shared/HumbergerIcon';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const MEMBERS = gql`
	query Users {
		users {
			_id
			fullName
		}
	}
`;

const _Members: React.FC<NavigationInjectedProps> = ({ navigation }) => {
	const { loading, error, data } = useQuery(MEMBERS);
	if (loading) return <Text>Loading ...</Text>;
	if (error) {
		return <Text>{`Error! ${error.message}`}</Text>;
	}
	console.log(data);
	return (
		<Container>
			<Text
				onPress={() => {
					navigation.navigate(
						'Details'
					);
				}}
			>
				thanh vien
			</Text>
			<FlatList
				data={
					data.users.map(
						(
							user: any
						) => ({
							...user,
							key:
								user._id
						})
					)
				}
				renderItem={({ item }:{item:any}) => {
					console.log('item', item)
					return(
					<Text>
						{
							item.fullName
						}
					</Text>
				)}}
			/>
		</Container>
	);
};
const Members = withNavigation(_Members);

export default createStackNavigator({
	Members: {
		screen: Members,
		navigationOptions: {
			headerTitle: 'Thành viên',
			headerLeft: <HumbergerIcon />
		}
	},
	Details: {
		screen: Details,
		navigationOptions: { headerTitle: 'Chi tiết' }
	}
});
