import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumPostTypeFilter {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true
  })
  equals?: "post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll" | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true
  })
  in?: Array<"post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll"> | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true
  })
  notIn?: Array<"post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true
  })
  not?: NestedEnumPostTypeFilter | undefined;
}
