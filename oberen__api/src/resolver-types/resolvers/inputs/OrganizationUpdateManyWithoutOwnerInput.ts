import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganizationCreateManyOwnerInputEnvelope } from "../inputs/OrganizationCreateManyOwnerInputEnvelope";
import { OrganizationCreateOrConnectWithoutOwnerInput } from "../inputs/OrganizationCreateOrConnectWithoutOwnerInput";
import { OrganizationCreateWithoutOwnerInput } from "../inputs/OrganizationCreateWithoutOwnerInput";
import { OrganizationScalarWhereInput } from "../inputs/OrganizationScalarWhereInput";
import { OrganizationUpdateManyWithWhereWithoutOwnerInput } from "../inputs/OrganizationUpdateManyWithWhereWithoutOwnerInput";
import { OrganizationUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/OrganizationUpdateWithWhereUniqueWithoutOwnerInput";
import { OrganizationUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/OrganizationUpsertWithWhereUniqueWithoutOwnerInput";
import { OrganizationWhereUniqueInput } from "../inputs/OrganizationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrganizationUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [OrganizationCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: OrganizationCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => OrganizationCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: OrganizationCreateManyOwnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrganizationUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrganizationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrganizationScalarWhereInput[] | undefined;
}
