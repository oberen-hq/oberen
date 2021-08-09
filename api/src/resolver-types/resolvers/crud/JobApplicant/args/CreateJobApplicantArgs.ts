import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantCreateInput } from "../../../inputs/JobApplicantCreateInput";

@TypeGraphQL.ArgsType()
export class CreateJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantCreateInput, {
    nullable: false
  })
  data!: JobApplicantCreateInput;
}
