import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorOrderByInput } from "../../../inputs/ErrorOrderByInput";
import { ErrorScalarWhereWithAggregatesInput } from "../../../inputs/ErrorScalarWhereWithAggregatesInput";
import { ErrorWhereInput } from "../../../inputs/ErrorWhereInput";
import { ErrorScalarFieldEnum } from "../../../../enums/ErrorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByErrorArgs {
  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  where?: ErrorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ErrorOrderByInput], {
    nullable: true
  })
  orderBy?: ErrorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "type" | "route" | "description" | "userId">;

  @TypeGraphQL.Field(_type => ErrorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ErrorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
