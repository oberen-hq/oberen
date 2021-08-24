import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentWhereInput } from "../../../inputs/AttachmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  where?: AttachmentWhereInput | undefined;
}
