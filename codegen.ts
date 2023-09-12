import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "backend/schema.graphql",
  generates: {
    "types/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-react-apollo",
      ],

      config: {
        contextType: "../backend/index#ApolloContext",
        useIndexSignature: true,
      },
    },
  },
};

export default config;
