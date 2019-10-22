import deviceTypes,{resolvers as deviceResolvers} from "./device"
import guardTypes,{resolvers as guardResolver} from "./guarding-assignment"
import userTypes,{resolvers as userResolver} from "./user"

import { makeExecutableSchema } from "graphql-tools";
import {merge} from "lodash"

export const schema = makeExecutableSchema({
	typeDefs: [deviceTypes,userTypes,guardTypes],
	// @ts-ignore
	resolvers: merge(userResolver,deviceResolvers,guardResolver)
})