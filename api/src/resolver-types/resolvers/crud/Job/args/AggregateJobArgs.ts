import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobOrderByInput } from "../../../inputs/JobOrderByInput";
import { JobWhereInput } from "../../../inputs/JobWhereInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateJobArgs {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobOrderByInput], {
    nullable: true
  })
  orderBy?: JobOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
