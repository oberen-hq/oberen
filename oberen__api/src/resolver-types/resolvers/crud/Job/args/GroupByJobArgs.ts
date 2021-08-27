import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobOrderByInput } from "../../../inputs/JobOrderByInput";
import { JobScalarWhereWithAggregatesInput } from "../../../inputs/JobScalarWhereWithAggregatesInput";
import { JobWhereInput } from "../../../inputs/JobWhereInput";
import { JobScalarFieldEnum } from "../../../../enums/JobScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJobArgs {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobOrderByInput], {
    nullable: true
  })
  orderBy?: JobOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => JobScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JobScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
