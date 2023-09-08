import { QueryResolvers } from "../../../types/graphql.ts";
import * as ncu from "npm-check-updates";

export const Query: QueryResolvers = {
  commits: async (_, { repository }, { bitbucketClient }) => {
    return await bitbucketClient.getCommits(repository);
  },
  tags: async (_, { repository }, { bitbucketClient }) => {
    return await bitbucketClient.getTags(repository);
  },
  availableDependencyUpgrades: async (
    _,
    { repository },
    { bitbucketClient }
  ) => {
    const packageJson = await bitbucketClient.getPackageJSON(repository);

    const currentPackageVersions = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    const updates = await ncu.run({
      packageData: packageJson,
      jsonUpgraded: true,
    });

    const diff = Object.entries(updates || {}).map(([packageName, version]) => {
      return {
        packageName,
        currentVersion: currentPackageVersions[packageName],
        latestVersion: version,
      };
    });

    return diff;
  },
  currentCommitOnAlpha: async (_, { repository }, { bitbucketClient }) => {
    const tags = await bitbucketClient.getTags(repository);

    // Find latest tag that matches format 0.0.000.0
    const latesestAlphaBuildTag = tags.find((tag) =>
      tag.name?.match(/[0-9]\.[0-9]\.[0-9]{3}\.[0-9]/)
    );

    return latesestAlphaBuildTag?.target || null;
  },
};
