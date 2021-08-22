import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConnectionService } from "../../enums/ConnectionService";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumConnectionServiceFilter {
  @TypeGraphQL.Field(_type => ConnectionService, {
    nullable: true
  })
  equals?: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local" | undefined;

  @TypeGraphQL.Field(_type => [ConnectionService], {
    nullable: true
  })
  in?: Array<"github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local"> | undefined;

  @TypeGraphQL.Field(_type => [ConnectionService], {
    nullable: true
  })
  notIn?: Array<"github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumConnectionServiceFilter, {
    nullable: true
  })
  not?: NestedEnumConnectionServiceFilter | undefined;
}
