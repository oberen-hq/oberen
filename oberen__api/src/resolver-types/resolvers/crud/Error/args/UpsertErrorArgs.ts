import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorCreateInput } from "../../../inputs/ErrorCreateInput";
import { ErrorUpdateInput } from "../../../inputs/ErrorUpdateInput";
import { ErrorWhereUniqueInput } from "../../../inputs/ErrorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertErrorArgs {
  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: false
  })
  where!: ErrorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ErrorCreateInput, {
    nullable: false
  })
  create!: ErrorCreateInput;

  @TypeGraphQL.Field(_type => ErrorUpdateInput, {
    nullable: false
  })
  update!: ErrorUpdateInput;
}
