import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutLabelsInput } from "../inputs/PostCreateNestedManyWithoutLabelsInput";
import { UserCreateNestedOneWithoutCreatedLabelsInput } from "../inputs/UserCreateNestedOneWithoutCreatedLabelsInput";
import { UserProfileCreateNestedOneWithoutLabelsInput } from "../inputs/UserProfileCreateNestedOneWithoutLabelsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedLabelsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutCreatedLabelsInput;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLabelsInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutLabelsInput, {
    nullable: false
  })
  profile!: UserProfileCreateNestedOneWithoutLabelsInput;
}
