import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ErrorOrderByInput } from "../../../inputs/ErrorOrderByInput";
import { ErrorWhereInput } from "../../../inputs/ErrorWhereInput";
import { ErrorWhereUniqueInput } from "../../../inputs/ErrorWhereUniqueInput";
import { ErrorScalarFieldEnum } from "../../../../enums/ErrorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyErrorArgs {
  @TypeGraphQL.Field(_type => ErrorWhereInput, {
    nullable: true
  })
  where?: ErrorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ErrorOrderByInput], {
    nullable: true
  })
  orderBy?: ErrorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ErrorWhereUniqueInput, {
    nullable: true
  })
  cursor?: ErrorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ErrorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "type" | "route" | "description" | "userId"> | undefined;
}
