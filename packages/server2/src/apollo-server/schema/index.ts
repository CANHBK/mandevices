import deviceTypes, { resolvers as deviceResolvers } from "./device";
import guardTypes, { resolvers as guardResolver } from "./guarding-assignment";
import userTypes, { resolvers as userResolver } from "./user";
import postTypes, { resolvers as postResolver } from "./post";

import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";

export const schema = makeExecutableSchema({
	typeDefs: [deviceTypes, userTypes, guardTypes, postTypes],

	// @ts-ignore
	resolvers: merge(
		userResolver,
		deviceResolvers,
		guardResolver,
		postResolver
	)
});
