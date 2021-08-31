import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateManyCreatorInput } from "../inputs/HashtagCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [HashtagCreateManyCreatorInput], {
    nullable: false
  })
  data!: HashtagCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
