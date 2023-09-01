import { Args, Query, Resolver } from "@nestjs/graphql";
import { BitbucketClient } from "../clients/bitbucket-client";

@Resolver("Commit")
export class CommitResolver {
  constructor(private bitbucketClient: BitbucketClient) {}

  @Query()
  async commits(@Args("repository") repository: string) {
    const commits = await this.bitbucketClient.getCommits(repository);
    return [{ message: "2" }];
  }
}
