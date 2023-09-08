import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import fastifyApollo, {
  ApolloFastifyContextFunction,
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import cors from "@fastify/cors";
import Fastify from "fastify";
import * as fs from "fs";

import { BitbucketClient } from "./clients/bitbucket-client.ts";
import { Query } from "./resolvers/bitbucket/query.ts";

export type ApolloContext = {
  bitbucketClient: BitbucketClient;
};

(async function initServer() {
  const fastify = Fastify({ forceCloseConnections: true });
  const typeDefs = fs.readFileSync("backend/schema.graphql", {
    encoding: "utf-8",
  });

  const bitbucketClient = new BitbucketClient({
    clientId: process.env.BITBUCKET_AUTH_KEY || "",
    clientSecret: process.env.BITBUCKET_AUTH_SECRET || "",
  });

  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
  const resolvers = {
    Query,
  };

  const apollo = new ApolloServer<ApolloContext>({
    typeDefs,
    resolvers,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  });

  const apolloContextFunction: ApolloFastifyContextFunction<
    ApolloContext
  > = async () => ({
    bitbucketClient,
  });

  await apollo.start();

  await fastify.register(cors);
  await fastify.register(fastifyApollo(apollo), {
    context: apolloContextFunction,
  });

  fastify.listen({ port: 3010 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log("fastify up on", address);
  });
})();
