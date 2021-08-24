import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateNestedManyWithoutProfileInput } from "../inputs/LabelCreateNestedManyWithoutProfileInput";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  status?: "online" | "idle" | "dnd" | "other" | "offline" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateNestedManyWithoutProfileInput, {
    nullable: true
  })
  labels?: LabelCreateNestedManyWithoutProfileInput | undefined;
}
