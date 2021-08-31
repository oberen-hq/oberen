import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagOrderByInput } from "../../../inputs/HashtagOrderByInput";
import { HashtagScalarWhereWithAggregatesInput } from "../../../inputs/HashtagScalarWhereWithAggregatesInput";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";
import { HashtagScalarFieldEnum } from "../../../../enums/HashtagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagOrderByInput], {
    nullable: true
  })
  orderBy?: HashtagOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "uses" | "creatorId">;

  @TypeGraphQL.Field(_type => HashtagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HashtagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
