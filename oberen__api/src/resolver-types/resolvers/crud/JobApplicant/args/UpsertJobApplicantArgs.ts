import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantCreateInput } from "../../../inputs/JobApplicantCreateInput";
import { JobApplicantUpdateInput } from "../../../inputs/JobApplicantUpdateInput";
import { JobApplicantWhereUniqueInput } from "../../../inputs/JobApplicantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereUniqueInput, {
    nullable: false
  })
  where!: JobApplicantWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobApplicantCreateInput, {
    nullable: false
  })
  create!: JobApplicantCreateInput;

  @TypeGraphQL.Field(_type => JobApplicantUpdateInput, {
    nullable: false
  })
  update!: JobApplicantUpdateInput;
}
