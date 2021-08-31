import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateOrConnectWithoutPostsInput } from "../inputs/LabelCreateOrConnectWithoutPostsInput";
import { LabelCreateWithoutPostsInput } from "../inputs/LabelCreateWithoutPostsInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LabelCreateNestedManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutPostsInput], {
    nullable: true
  })
  create?: LabelCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true
  })
  connect?: LabelWhereUniqueInput[] | undefined;
}
