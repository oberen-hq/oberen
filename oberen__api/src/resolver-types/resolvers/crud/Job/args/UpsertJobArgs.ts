import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobCreateInput } from "../../../inputs/JobCreateInput";
import { JobUpdateInput } from "../../../inputs/JobUpdateInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertJobArgs {
  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobCreateInput, {
    nullable: false
  })
  create!: JobCreateInput;

  @TypeGraphQL.Field(_type => JobUpdateInput, {
    nullable: false
  })
  update!: JobUpdateInput;
}
