import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentMinAggregate {
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
  attachmentUrl!: string | null;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: true
  })
  type!: "image" | "video" | "organization" | "post" | "other" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reportId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId!: string | null;
}
