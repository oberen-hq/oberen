import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateNestedManyWithoutProfileInput } from "../inputs/LabelCreateNestedManyWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarURL?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutProfileInput, {
    nullable: true
  })
  labels?: LabelCreateNestedManyWithoutProfileInput | undefined;
}
