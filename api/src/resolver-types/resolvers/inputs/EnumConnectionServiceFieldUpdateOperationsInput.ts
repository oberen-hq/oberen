import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConnectionService } from "../../enums/ConnectionService";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumConnectionServiceFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ConnectionService, {
    nullable: true
  })
  set?: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin" | "local" | undefined;
}
