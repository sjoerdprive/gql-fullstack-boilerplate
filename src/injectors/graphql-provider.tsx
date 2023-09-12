import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

type GraphQLProviderProps = PropsWithChildren & {};

export const GraphQLProvider = ({ children }: GraphQLProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
