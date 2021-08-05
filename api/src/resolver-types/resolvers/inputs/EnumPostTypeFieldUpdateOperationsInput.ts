import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPostTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true
  })
  set?: "post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll" | undefined;
}
