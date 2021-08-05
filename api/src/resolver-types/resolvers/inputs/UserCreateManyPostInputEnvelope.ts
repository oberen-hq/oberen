import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyPostInput } from "../inputs/UserCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyPostInput], {
    nullable: false
  })
  data!: UserCreateManyPostInput[];
}
