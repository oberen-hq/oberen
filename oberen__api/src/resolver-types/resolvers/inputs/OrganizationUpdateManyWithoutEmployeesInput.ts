import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateOrConnectWithoutEmployeesInput } from "../inputs/OrganizationCreateOrConnectWithoutEmployeesInput";
import { OrganizationCreateWithoutEmployeesInput } from "../inputs/OrganizationCreateWithoutEmployeesInput";
import { OrganizationScalarWhereInput } from "../inputs/OrganizationScalarWhereInput";
import { OrganizationUpdateManyWithWhereWithoutEmployeesInput } from "../inputs/OrganizationUpdateManyWithWhereWithoutEmployeesInput";
import { OrganizationUpdateWithWhereUniqueWithoutEmployeesInput } from "../inputs/OrganizationUpdateWithWhereUniqueWithoutEmployeesInput";
import { OrganizationUpsertWithWhereUniqueWithoutEmployeesInput } from "../inputs/OrganizationUpsertWithWhereUniqueWithoutEmployeesInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationUpdateManyWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => [OrganizationCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: OrganizationCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationUpsertWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  upsert?: OrganizationUpsertWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  connect?: OrganizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  set?: OrganizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrganizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationWhereUniqueInput], {
    nullable: true
  })
  delete?: OrganizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationUpdateWithWhereUniqueWithoutEmployeesInput], {
    nullable: true
  })
  update?: OrganizationUpdateWithWhereUniqueWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationUpdateManyWithWhereWithoutEmployeesInput], {
    nullable: true
  })
  updateMany?: OrganizationUpdateManyWithWhereWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrganizationScalarWhereInput[] | undefined;
}
