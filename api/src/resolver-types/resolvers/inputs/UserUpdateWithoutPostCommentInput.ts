import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutLikersInput } from "../inputs/PostCommentUpdateManyWithoutLikersInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { PostUpdateManyWithoutUserInput } from "../inputs/PostUpdateManyWithoutUserInput";
import { PostUpdateOneWithoutLikersInput } from "../inputs/PostUpdateOneWithoutLikersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneRequiredWithoutUserInput } from "../inputs/UserProfileUpdateOneRequiredWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutPostCommentInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  UserRole?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneRequiredWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneRequiredWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUserInput, {
    nullable: true
  })
  likedPosts?: PostUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedComments?: PostCommentUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutLikersInput, {
    nullable: true
  })
  Post?: PostUpdateOneWithoutLikersInput | undefined;
}
