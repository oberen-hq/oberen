import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutLabelsInput } from "../inputs/UserProfileCreateWithoutLabelsInput";
import { UserProfileUpdateWithoutLabelsInput } from "../inputs/UserProfileUpdateWithoutLabelsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithoutLabelsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutLabelsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutLabelsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutLabelsInput;
}
