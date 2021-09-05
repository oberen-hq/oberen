import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorWhereInput } from "../../../inputs/ErrorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyErrorArgs {
  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  where?: ErrorWhereInput | undefined;
}
