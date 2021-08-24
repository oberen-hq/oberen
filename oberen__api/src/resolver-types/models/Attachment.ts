import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Report } from "../models/Report";
import { AttachmentType } from "../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Attachment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentUrl!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "organization" | "post" | "other";

  post?: Post | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  report?: Report;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reportId!: string;
}
