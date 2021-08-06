import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedCommentsInput } from "../inputs/UserCreateOrConnectWithoutLikedCommentsInput";
import { UserCreateWithoutLikedCommentsInput } from "../inputs/UserCreateWithoutLikedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutLikedCommentsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLikedCommentsInput], {
    nullable: true
  })
  create?: UserCreateWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedCommentsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
