import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: [join(process.cwd(), "**/*.graphql")],
  path: join(process.cwd(), "types/graphql.ts"),
});
