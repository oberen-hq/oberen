import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { ConnectionService } from "../enums/ConnectionService";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OauthConnection {
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

  @TypeGraphQL.Field(_type => ConnectionService, {
    nullable: false
  })
  oauthService!: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  oauthServiceUserId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPrimary!: boolean;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
