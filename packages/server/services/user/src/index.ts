import app from './app';
import apolloServer from './apollo';
import "./seed"

const port = process.env.PORT;

apolloServer.applyMiddleware({ app });

app.listen({ port }, () => {
	console.log(`Sevice User ready on	 port ${port}`);
});
