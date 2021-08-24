import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantWhereInput } from "../../../inputs/JobApplicantWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereInput, {
    nullable: true
  })
  where?: JobApplicantWhereInput | undefined;
}
