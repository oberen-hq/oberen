import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantOrderByInput } from "../../../inputs/JobApplicantOrderByInput";
import { JobApplicantScalarWhereWithAggregatesInput } from "../../../inputs/JobApplicantScalarWhereWithAggregatesInput";
import { JobApplicantWhereInput } from "../../../inputs/JobApplicantWhereInput";
import { JobApplicantScalarFieldEnum } from "../../../../enums/JobApplicantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereInput, {
    nullable: true
  })
  where?: JobApplicantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantOrderByInput], {
    nullable: true
  })
  orderBy?: JobApplicantOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => JobApplicantScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JobApplicantScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
