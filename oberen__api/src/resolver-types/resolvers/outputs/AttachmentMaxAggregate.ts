import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: true
  })
  type!: "image" | "video" | "organization" | "post" | "other" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId!: string | null;
}
