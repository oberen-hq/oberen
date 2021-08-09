import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantCreateManyInput } from "../../../inputs/JobApplicantCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJobApplicantArgs {
  @TypeGraphQL.Field(_type => [JobApplicantCreateManyInput], {
    nullable: false
  })
  data!: JobApplicantCreateManyInput[];
}
