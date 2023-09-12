import { gql } from "@apollo/client";
import { useQuery } from "./hooks/useQuery";

const GET_LATEST_ALPHA_COMMIT = gql(`
          query GetCurrentAlphaCommit($repository: String!) {
            currentCommitOnAlpha(repository: $repository) {
              message
            }
          }
        `);

export const TestApp = () => {
  const { data, loading } = useQuery(GET_LATEST_ALPHA_COMMIT, {
    variables: {
      repository: "haywork_app_v4-2",
    },
  });

  return <div>{loading ? "Loading" : data?.currentCommitOnAlpha?.message}</div>;
};
