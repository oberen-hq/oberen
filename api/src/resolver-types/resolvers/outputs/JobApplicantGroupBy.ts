import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobApplicantCountAggregate } from "../outputs/JobApplicantCountAggregate";
import { JobApplicantMaxAggregate } from "../outputs/JobApplicantMaxAggregate";
import { JobApplicantMinAggregate } from "../outputs/JobApplicantMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class JobApplicantGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => JobApplicantCountAggregate, {
    nullable: true
  })
  _count!: JobApplicantCountAggregate | null;

  @TypeGraphQL.Field(_type => JobApplicantMinAggregate, {
    nullable: true
  })
  _min!: JobApplicantMinAggregate | null;

  @TypeGraphQL.Field(_type => JobApplicantMaxAggregate, {
    nullable: true
  })
  _max!: JobApplicantMaxAggregate | null;
}
