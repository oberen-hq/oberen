import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantWhereUniqueInput } from "../../../inputs/JobApplicantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereUniqueInput, {
    nullable: false
  })
  where!: JobApplicantWhereUniqueInput;
}
