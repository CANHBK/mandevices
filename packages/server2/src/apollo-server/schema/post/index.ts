import { Resolvers } from "../../../generated/graphql";
import typeDefs from "./schema";
import { UserProfileController } from "../../../database/controller/UserController";
import { PostController } from "../../../database/controller/PostController";

export default typeDefs;

export const resolvers = {
	Query: {
		posts: async (_, __, { token }) => {
			const userProfile = await UserProfileController.getInstance().getByProfileToken(
				token
			);
			return PostController.getInstance().getPostsByAuthor(
				userProfile.id
			);
		},
		post: async (_, { where }) => {
			return PostController.getInstance().getPost(where);
		}
	},
	Mutation: {
		createPost: async (_, { data }, { token }) => {
			const userProfile = await UserProfileController.getInstance().getByProfileToken(
				token
			);

			if (!userProfile) {
				throw new Error("Phai dang nhap");
			}

			return PostController.getInstance().createPost(
				userProfile.id,
				{ ...data }
			);
		},
		updatePost: async (_, { where, data }) => {
			const result = await PostController.getInstance().updatePost(
				{
					where,
					...data
				}
			);
			if (result.raw.affectedRows) {
				return true;
			}
			return false;
		},
		deletePost: async (_, { where }) => {
			const deleteResult = await PostController.getInstance().deletePost(
				where
			);
			if (deleteResult.affected) {
				return true;
			}

			return false;
		}
	}
};
