import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagScalarWhereInput } from "../inputs/HashtagScalarWhereInput";
import { HashtagUpdateManyMutationInput } from "../inputs/HashtagUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagUpdateManyWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => HashtagScalarWhereInput, {
    nullable: false
  })
  where!: HashtagScalarWhereInput;

  @TypeGraphQL.Field(_type => HashtagUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashtagUpdateManyMutationInput;
}
