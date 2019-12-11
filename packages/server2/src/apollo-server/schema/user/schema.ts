import { gql } from "apollo-server-express";

export default gql`
	enum Role {
		GUEST
		MANAGER
	}
	type User {
		id: ID!
		firstName: String!
		fullName: String!
		email: String
		avatar: String
		course: Int
		
		#Kiểm tra Email đã được xác thực hay chưa?
		checked: Boolean!
		
		# Đường/Thôn thường trú
		streetOrHamletResident: String
		# Tỉnh/Thành phố thường trú
		provinceOrCityResident: String
		# Quận/Huyện thường trú
		districtResident: String
		# Xã/Phường thường trú
		villageOrBlockResident: String

		# Tỉnh/Thành phố hộ khẩu
		provinceOrCity: String
		# Quận/Huyện hộ khẩu
		district: String
		# Xã/Phường hộ khẩu
		villageOrBlock: String
		# Đường/Thôn hộ khẩu
		streetOrHamlet: String
		role: Role!
	}
	
	type AuthenticationInfo {
		token: String
		user: User!
	}

	input UserUpdateInput{
		fullName: String
		role: Role
		course: Int
		# Đường/Thôn thường trú
		streetOrHamletResident: String
		# Tỉnh/Thành phố thường trú
		provinceOrCityResident: String
		# Quận/Huyện thường trú
		districtResident: String
		# Xã/Phường thường trú
		villageOrBlockResident: String

		# Tỉnh/Thành phố hộ khẩu
		provinceOrCity: String
		# Quận/Huyện hộ khẩu
		district: String
		# Xã/Phường hộ khẩu
		villageOrBlock: String
		# Đường/Thôn hộ khẩu
		streetOrHamlet: String
	}

	input UserWhereUniqueInput{
		id: ID!
	}

	type Mutation {
		register(
			fullName: String!
			email: String!
			password: String!
		): Boolean
		login(email: String!, password: String!): AuthenticationInfo
		updateUser(where: UserWhereUniqueInput!,data: UserUpdateInput!):User!
		facebookLogin(
			email: String!
			name: String!
			avatar: String!
		): AuthenticationInfo
	}
	type Query {
		user(where: UserWhereUniqueInput!): User!
		users: [User!]!
		currentUser: AuthenticationInfo
	}
`;
