import { and, deny, not, or, rule, shield } from 'graphql-shield';

import { ApolloServer } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { applyMiddleware } from 'graphql-middleware';
import { schema } from './schema';
import { verify } from 'jsonwebtoken';
import { TypeInfo, GraphQLField, GraphQLEnumValue } from 'graphql';
import { userLoader } from '../database/controller/UserController';


const getUser = (req: ExpressContext) => {
	const token = req.req.headers.authorization;
	console.log('token', token);
	if (token === 'null' || !token) {
		return null;
	}
	
	const decodedToken = verify(token, process.env.JSON_WEB_TOKEN_SECRET!);
	
	return decodedToken;
};

const isAdmin = rule({ cache: 'contextual' })(async (_, __, ctx) => {
	return ctx.user.roles.include('admin');
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
				loaders:{
					userLoader: userLoader()
				},
				token:
					request.req.headers.authorization ===
					'null'
						? null
						: request.req.headers
							.authorization,
				user: getUser(request)
			};
		}
	});
}
