import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import { ApolloServer, BaseContext } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import * as fs from "fs";
import cors from "@fastify/cors";

import { BitbucketClient } from "./clients/bitbucket-client.ts";

const bitbucketClient = new BitbucketClient({
  clientId: process.env.BITBUCKET_AUTH_KEY || "",
  clientSecret: process.env.BITBUCKET_AUTH_SECRET || "",
});

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    commits: async (_: any, { repository }: { repository: string }) => {
      return (await bitbucketClient.getCommits(repository))?.values || [];
    },
  },
};

(async function initServer() {
  const fastify = Fastify({ forceCloseConnections: true });
  const typeDefs = fs.readFileSync("backend/schema.graphql", {
    encoding: "utf-8",
  });

  const apollo = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  });

  await apollo.start();

  await fastify.register(fastifyApollo(apollo));
  await fastify.register(cors);

  fastify.listen({ port: 3010 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log("fastify up on", address);
  });
})();
