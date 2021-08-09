import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobCreateInput } from "../../../inputs/JobCreateInput";

@TypeGraphQL.ArgsType()
export class CreateJobArgs {
  @TypeGraphQL.Field(_type => JobCreateInput, {
    nullable: false
  })
  data!: JobCreateInput;
}
