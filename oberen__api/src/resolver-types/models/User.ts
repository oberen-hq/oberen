import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Error } from "../models/Error";
import { Follower } from "../models/Follower";
import { Following } from "../models/Following";
import { Hashtag } from "../models/Hashtag";
import { Label } from "../models/Label";
import { Organization } from "../models/Organization";
import { Post } from "../models/Post";
import { PostComment } from "../models/PostComment";
import { Session } from "../models/Session";
import { TokenPair } from "../models/TokenPair";
import { UserProfile } from "../models/UserProfile";
import { Role } from "../enums/Role";
import { profile } from "console";

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isLocal?: boolean | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "user" | "staff" | "admin" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  count!: number;

  tokens?: TokenPair[];

  @TypeGraphQL.Field(_type => [Session], {
    nullable: true
  })
  sessions?: Session[];

  @TypeGraphQL.Field(_type => UserProfile, {
    nullable: true
  })
  profile?: UserProfile | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profileId?: string | null;

  ownedOrganizations?: Organization[];

  joinedOrganizations?: Organization[];

  posts?: Post[];

  likedPosts?: Post[];

  likedComments?: PostComment[];

  createdPostComments?: PostComment[];

  @TypeGraphQL.Field(_type => [Following], {
    nullable: true
  })
  following?: Following[];

  @TypeGraphQL.Field(_type => [Follower], {
    nullable: true
  })
  followers?: Follower[];

  createdLabels?: Label[];

  createdHashtags?: Hashtag[];

  @TypeGraphQL.Field(_type => [Error], {
    nullable: true
  })
  errors?: Error[];
}
