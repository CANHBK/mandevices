import { gql } from "apollo-server-express";

export default gql`
	type Post {
		id: ID!
		title: String!
		thumnail: String
		content: String!
		createdAt: String
		updatedAt: String
	}

	extend type Query {
		posts: [Post!]!
		post(where: PostWhereUniqueInput!): Post!
	}

	input PostCreateInput {
		title: String!
		content: String!
	}
	input PostUpdateInput {
		title: String!
		content: String!
	}
	input PostWhereUniqueInput {
		id: ID!
	}
	extend type Mutation {
		createPost(data: PostCreateInput!): Post!
		updatePost(
			where: PostWhereUniqueInput!
			data: PostUpdateInput!
		): Boolean!
		deletePost(where: PostWhereUniqueInput!): Boolean!
	}
`;
