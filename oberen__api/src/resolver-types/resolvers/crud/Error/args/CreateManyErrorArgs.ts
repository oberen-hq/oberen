import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorCreateManyInput } from "../../../inputs/ErrorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyErrorArgs {
  @TypeGraphQL.Field(_type => [ErrorCreateManyInput], {
    nullable: false
  })
  data!: ErrorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
