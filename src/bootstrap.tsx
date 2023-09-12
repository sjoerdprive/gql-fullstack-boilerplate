import { RouterProvider } from "react-router";
import { GraphQLProvider } from "./injectors/graphql-provider";
import { router } from "./router";

export const Bootstrap = () => {
  return (
    <GraphQLProvider>
      <RouterProvider router={router} />
    </GraphQLProvider>
  );
};
