import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingScalarWhereInput } from "../inputs/FollowingScalarWhereInput";
import { FollowingUpdateManyMutationInput } from "../inputs/FollowingUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowingScalarWhereInput, {
    nullable: false
  })
  where!: FollowingScalarWhereInput;

  @TypeGraphQL.Field(_type => FollowingUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowingUpdateManyMutationInput;
}
