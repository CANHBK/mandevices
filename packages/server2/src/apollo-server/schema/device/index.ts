import { Resolvers } from "../../../generated/graphql";
import typeDefs from "./schema";

export default typeDefs;

export const resolvers: Resolvers = {
	Query: {
		devices: () => {
			return [{ id: "123" }];
		}
	}
};
