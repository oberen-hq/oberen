import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RequestType } from "../../enums/RequestType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumRequestTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => RequestType, {
    nullable: true
  })
  set?: "bugReport" | "userReport" | "featureRequest" | "ticket" | undefined;
}
