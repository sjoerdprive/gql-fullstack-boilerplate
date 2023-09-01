import { Module } from "@nestjs/common";
import { BitbucketClient } from "../clients/bitbucket-client";
import { CommitResolver } from "./commits.resolver";
import { bitbucketProvider } from "../providers/bitbucket.provider";

@Module({
  exports: [CommitResolver],
})
export class CommitsModule {}
