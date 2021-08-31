import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedPostCommentsInput } from "../inputs/UserCreateOrConnectWithoutCreatedPostCommentsInput";
import { UserCreateWithoutCreatedPostCommentsInput } from "../inputs/UserCreateWithoutCreatedPostCommentsInput";
import { UserUpdateWithoutCreatedPostCommentsInput } from "../inputs/UserUpdateWithoutCreatedPostCommentsInput";
import { UserUpsertWithoutCreatedPostCommentsInput } from "../inputs/UserUpsertWithoutCreatedPostCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedPostCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPostCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedPostCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedPostCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedPostCommentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedPostCommentsInput | undefined;
}
