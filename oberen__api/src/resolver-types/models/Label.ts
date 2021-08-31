import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Label {
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
    nullable: false
  })
  color!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  posts?: Post[];

  profile?: UserProfile;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profileId!: string;
}
