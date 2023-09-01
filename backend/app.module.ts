import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { fastifyApolloDrainPlugin } from "@as-integrations/fastify";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import Fastify from "fastify";
import { CommitsModule } from "./commits/commits.module";
import { bitbucketProvider } from "./providers/bitbucket.provider";

const fastify = Fastify();

@Module({
  imports: [
    CommitsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      installSubscriptionHandlers: true,
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        fastifyApolloDrainPlugin(fastify),
      ],
    }),
  ],
  providers: [bitbucketProvider],
})
export class AppModule {}
