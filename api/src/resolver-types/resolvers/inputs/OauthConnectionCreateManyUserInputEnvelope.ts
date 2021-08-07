import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OauthConnectionCreateManyUserInput } from "../inputs/OauthConnectionCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OauthConnectionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [OauthConnectionCreateManyUserInput], {
    nullable: false
  })
  data!: OauthConnectionCreateManyUserInput[];
}
