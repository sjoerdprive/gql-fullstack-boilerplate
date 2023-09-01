import { BitbucketClient } from "../clients/bitbucket-client";

export const bitbucketProvider = {
  provide: "CONNECTION",
  useFactory: async () => {
    const bitbucketClient = new BitbucketClient();
    await bitbucketClient.authorize();
    return bitbucketClient;
  },
};
