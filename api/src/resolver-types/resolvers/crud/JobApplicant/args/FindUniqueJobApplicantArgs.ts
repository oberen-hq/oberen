import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantWhereUniqueInput } from "../../../inputs/JobApplicantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereUniqueInput, {
    nullable: false
  })
  where!: JobApplicantWhereUniqueInput;
}
