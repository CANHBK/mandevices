import { and, deny, not, or, rule, shield } from "graphql-shield";

import { ApolloServer } from "apollo-server-express";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { applyMiddleware } from "graphql-middleware";
import { schema } from "./schema";
import { verify } from "jsonwebtoken";

const getUser = async (req: ExpressContext) => {
	const token = req.req.headers.authorization;
	if (!token) {
		return null;
	}
	const decodedToken = verify(token, process.env.JSON_WEB_TOKEN_SECRET!);

	return decodedToken;
};

const isAdmin = rule({ cache: "contextual" })(async (_, __, ctx) => {
	return ctx.user.roles.include("admin");
});

const permissions = shield({
	Query: {
		users: isAdmin
	}
});

export const getApolloServer = async () => {
	return new ApolloServer({
		schema: applyMiddleware(schema, permissions),
		playground: true,
		introspection: true,
		context: request => {

			return {
				token: request.req.headers.authorization,
				user: getUser(request)
			};
		}
	});
};
