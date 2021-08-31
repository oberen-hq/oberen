import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagOrderByInput } from "../../../inputs/HashtagOrderByInput";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";
import { HashtagWhereUniqueInput } from "../../../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagOrderByInput], {
    nullable: true
  })
  orderBy?: HashtagOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: true
  })
  cursor?: HashtagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
