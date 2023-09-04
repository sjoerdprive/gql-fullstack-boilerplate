import { BitbucketClient } from "../../../clients/bitbucket-client.ts";

const bitbucketClient = new BitbucketClient({
  clientId: process.env.BITBUCKET_AUTH_KEY || "",
  clientSecret: process.env.BITBUCKET_AUTH_SECRET || "",
});

export const commits = async (
  _: any,
  { repository }: { repository: string }
) => {
  return (await bitbucketClient.getCommits(repository))?.values || [];
};
