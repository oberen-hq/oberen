import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  set?: "online" | "idle" | "dnd" | "other" | "offline" | undefined;
}
