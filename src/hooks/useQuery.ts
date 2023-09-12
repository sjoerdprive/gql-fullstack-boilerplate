import {
  DocumentNode,
  NoInfer,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery as useApolloQuery,
} from "@apollo/client";
import { Query } from "../../types/graphql";

export const useQuery = <
  TData = Query,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => useApolloQuery(query, options);
