import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorUpdateManyMutationInput } from "../../../inputs/ErrorUpdateManyMutationInput";
import { ErrorWhereInput } from "../../../inputs/ErrorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyErrorArgs {
  @TypeGraphQL.Field(_type => ErrorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ErrorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  where?: ErrorWhereInput | undefined;
}
