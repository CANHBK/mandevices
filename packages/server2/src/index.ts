import "reflect-metadata";
import "./database";

import { getApolloServer } from "./apollo-server";
import { setupExpress } from "./rest-api";

const startServer = async () => {
  const apolloServer = await getApolloServer();

  const app = setupExpress();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: process.env.PORT }, () => {
    console.log("server started");
  });
};

startServer();
