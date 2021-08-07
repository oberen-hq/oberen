import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OauthConnectionCountAggregate } from "../outputs/OauthConnectionCountAggregate";
import { OauthConnectionMaxAggregate } from "../outputs/OauthConnectionMaxAggregate";
import { OauthConnectionMinAggregate } from "../outputs/OauthConnectionMinAggregate";
import { ConnectionService } from "../../enums/ConnectionService";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OauthConnectionGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => OauthConnectionCountAggregate, {
    nullable: true
  })
  _count!: OauthConnectionCountAggregate | null;

  @TypeGraphQL.Field(_type => OauthConnectionMinAggregate, {
    nullable: true
  })
  _min!: OauthConnectionMinAggregate | null;

  @TypeGraphQL.Field(_type => OauthConnectionMaxAggregate, {
    nullable: true
  })
  _max!: OauthConnectionMaxAggregate | null;
}
