import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateWithoutCreatorInput } from "../inputs/HashtagCreateWithoutCreatorInput";
import { HashtagUpdateWithoutCreatorInput } from "../inputs/HashtagUpdateWithoutCreatorInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: HashtagUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => HashtagCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: HashtagCreateWithoutCreatorInput;
}
