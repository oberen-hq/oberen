import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowingInput } from "../inputs/UserCreateNestedOneWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutFollowingInput | undefined;
}
