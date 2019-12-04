import typeDefs from "./schema";

export default typeDefs;

export const resolvers = {
	Query: {
		devices: () => {
			return [{ id: "123" }];
		}
	}
};
