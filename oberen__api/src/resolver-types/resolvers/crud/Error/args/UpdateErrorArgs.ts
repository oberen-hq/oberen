import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorUpdateInput } from "../../../inputs/ErrorUpdateInput";
import { ErrorWhereUniqueInput } from "../../../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateErrorArgs {
  @TypeGraphQL.Field(_type => ErrorUpdateInput, {
    nullable: false
  })
  data!: ErrorUpdateInput;

  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: false
  })
  where!: ErrorWhereUniqueInput;
}
