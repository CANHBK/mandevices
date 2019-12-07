import { gql } from "apollo-server-express";

export default gql`
	# Xã/Phường
	type Ward {
		id: ID!
		name: String!
		prefix: String
	}
	# Quận/Huyện
	type District {
		id: ID!
		name: String
		wards: [Ward!]!
	}
	# Tỉnh/Thành Phố
	type City {
		id: ID!
		name: String
		districts: [District!]!
	}
	extend type Query {
		cities: [City!]!
	}
`;
