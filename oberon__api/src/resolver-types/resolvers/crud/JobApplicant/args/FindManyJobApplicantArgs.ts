import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobApplicantOrderByInput } from "../../../inputs/JobApplicantOrderByInput";
import { JobApplicantWhereInput } from "../../../inputs/JobApplicantWhereInput";
import { JobApplicantWhereUniqueInput } from "../../../inputs/JobApplicantWhereUniqueInput";
import { JobApplicantScalarFieldEnum } from "../../../../enums/JobApplicantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyJobApplicantArgs {
  @TypeGraphQL.Field(_type => JobApplicantWhereInput, {
    nullable: true
  })
  where?: JobApplicantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantOrderByInput], {
    nullable: true
  })
  orderBy?: JobApplicantOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => JobApplicantWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobApplicantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantScalarFieldEnum], {
    nullable: true
  })
  distinct?: "id"[] | undefined;
}