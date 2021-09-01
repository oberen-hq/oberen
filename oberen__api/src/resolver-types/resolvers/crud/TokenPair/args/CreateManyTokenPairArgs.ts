import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokenPairCreateManyInput } from "../../../inputs/TokenPairCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTokenPairArgs {
  @TypeGraphQL.Field(_type => [TokenPairCreateManyInput], {
    nullable: false
  })
  data!: TokenPairCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
