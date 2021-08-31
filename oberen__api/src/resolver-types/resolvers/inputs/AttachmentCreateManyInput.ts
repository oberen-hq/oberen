import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyInput {
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
  url!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "organization" | "post" | "other";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId?: string | undefined;
}
