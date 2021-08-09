import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JobApplicantWhereInput {
  @TypeGraphQL.Field(_type => [JobApplicantWhereInput], {
    nullable: true
  })
  AND?: JobApplicantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantWhereInput], {
    nullable: true
  })
  OR?: JobApplicantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JobApplicantWhereInput], {
    nullable: true
  })
  NOT?: JobApplicantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;
}
