import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentCreateInput } from "../../../inputs/AttachmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentCreateInput, {
    nullable: false
  })
  data!: AttachmentCreateInput;
}
