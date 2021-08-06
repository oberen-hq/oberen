import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;
}
