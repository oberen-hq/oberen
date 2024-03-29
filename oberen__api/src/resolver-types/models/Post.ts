import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attachment } from "../models/Attachment";
import { Hashtag } from "../models/Hashtag";
import { Label } from "../models/Label";
import { PostComment } from "../models/PostComment";
import { User } from "../models/User";
import { PostType } from "../enums/PostType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false
  })
  type!: "post" | "job" | "organization" | "shift" | "article" | "feedback" | "poll";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  likers?: User[];

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  likes!: bigint;

  comments?: PostComment[];

  attachments?: Attachment[];

  hashtags?: Hashtag[];

  labels?: Label[];

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;
}
