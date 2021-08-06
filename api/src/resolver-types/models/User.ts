import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Label } from "../models/Label";
import { Post } from "../models/Post";
import { PostComment } from "../models/PostComment";
import { UserProfile } from "../models/UserProfile";
import { Role } from "../enums/Role";
import { UserType } from "../enums/UserType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
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

  @TypeGraphQL.Field(_type => UserType, {
    nullable: true
  })
  type?: "LOCAL" | "OAUTH" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  userRole?: "USER" | "ADMIN" | null;

  profile?: UserProfile | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profileId?: string | null;

  posts?: Post[];

  likedPosts?: Post[];

  likedComments?: PostComment[];

  PostComment?: PostComment[];

  createdLabels?: Label[];
}
