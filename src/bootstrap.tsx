import { GraphQLProvider } from "./injectors/graphql-provider";
import { TestApp } from "./test";

export const Bootstrap = () => {
  return (
    <GraphQLProvider>
      <TestApp />
    </GraphQLProvider>
  );
};
