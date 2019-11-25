import { gql } from 'apollo-server-express';

export default gql`
	extend type Query{
		devices: [Device!]!
		device(id: ID!):Device
	}
	type Device {
		id: ID!
	}
`;
