import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCreateManyUserInput } from "../inputs/FollowingCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowingCreateManyUserInput], {
    nullable: false
  })
  data!: FollowingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
