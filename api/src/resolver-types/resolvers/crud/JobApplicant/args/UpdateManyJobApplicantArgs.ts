import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantUpdateManyMutationInput } from "../../../inputs/JobApplicantUpdateManyMutationInput";
import { JobApplicantWhereInput } from "../../../inputs/JobApplicantWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantUpdateManyMutationInput, {
    nullable: false
  })
  data!: JobApplicantUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JobApplicantWhereInput, {
    nullable: true
  })
  where?: JobApplicantWhereInput | undefined;
}
