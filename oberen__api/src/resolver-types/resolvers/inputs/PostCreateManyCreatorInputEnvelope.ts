import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCreatorInput } from "../inputs/PostCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyCreatorInput], {
    nullable: false
  })
  data!: PostCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
