import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUpdateInput } from "../../../inputs/JobUpdateInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateJobArgs {
  @TypeGraphQL.Field(_type => JobUpdateInput, {
    nullable: false
  })
  data!: JobUpdateInput;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;
}
