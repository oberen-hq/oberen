import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantUpdateInput } from "../../../inputs/JobApplicantUpdateInput";
import { JobApplicantWhereUniqueInput } from "../../../inputs/JobApplicantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantUpdateInput, {
    nullable: false
  })
  data!: JobApplicantUpdateInput;

  @TypeGraphQL.Field(_type => JobApplicantWhereUniqueInput, {
    nullable: false
  })
  where!: JobApplicantWhereUniqueInput;
}
