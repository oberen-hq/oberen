import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobUpdateManyMutationInput } from "../../../inputs/JobUpdateManyMutationInput";
import { JobWhereInput } from "../../../inputs/JobWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobArgs {
  @TypeGraphQL.Field(_type => JobUpdateManyMutationInput, {
    nullable: false
  })
  data!: JobUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;
}
