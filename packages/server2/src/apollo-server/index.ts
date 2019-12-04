import { and, deny, not, or, rule, shield } from "graphql-shield";

import { ApolloServer } from "apollo-server-express";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { applyMiddleware } from "graphql-middleware";
import { schema } from "./schema";
import { verify } from "jsonwebtoken";
import { SchemaDirectiveVisitor } from "graphql-tools";
import { TypeInfo, GraphQLField, GraphQLEnumValue } from "graphql";


const getUser = (req: ExpressContext) => {
	const token = req.req.headers.authorization;

	if (token === "null") {
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
``;

export const SchemaAST = new TypeInfo(schema);

export const getApolloServer = async () => {
	return new ApolloServer({
		schema,
		// schema: applyMiddleware(schema, permissions),
		playground: true,
		introspection: true,
		context: request => {
			return {
				token:
					request.req.headers.authorization ===
					"null"
						? null
						: request.req.headers
								.authorization,
				user: getUser(request)
			};
		}
	});
};
