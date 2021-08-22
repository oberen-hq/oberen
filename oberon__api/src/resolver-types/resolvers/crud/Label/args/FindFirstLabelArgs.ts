import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelOrderByInput } from "../../../inputs/LabelOrderByInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";
import { LabelScalarFieldEnum } from "../../../../enums/LabelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  where?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LabelOrderByInput], {
    nullable: true
  })
  orderBy?: LabelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: true
  })
  cursor?: LabelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "description" | "uses" | "creatorId" | "profileId"> | undefined;
}
