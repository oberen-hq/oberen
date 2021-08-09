import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentWhereUniqueInput } from "../../../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;
}
