import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorWhereUniqueInput } from "../../../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueErrorArgs {
  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: false
  })
  where!: ErrorWhereUniqueInput;
}
