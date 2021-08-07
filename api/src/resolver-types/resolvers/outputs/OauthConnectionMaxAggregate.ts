import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConnectionService } from "../../enums/ConnectionService";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OauthConnectionMaxAggregate {
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

  @TypeGraphQL.Field(_type => ConnectionService, {
    nullable: true
  })
  oauthService!: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oauthServiceUserId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPrimary!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
