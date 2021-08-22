import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentCreateInput } from "../../../inputs/AttachmentCreateInput";
import { AttachmentUpdateInput } from "../../../inputs/AttachmentUpdateInput";
import { AttachmentWhereUniqueInput } from "../../../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentCreateInput, {
    nullable: false
  })
  create!: AttachmentCreateInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateInput, {
    nullable: false
  })
  update!: AttachmentUpdateInput;
}
