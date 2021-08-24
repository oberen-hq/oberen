import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentUpdateManyMutationInput } from "../../../inputs/AttachmentUpdateManyMutationInput";
import { AttachmentWhereInput } from "../../../inputs/AttachmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttachmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  where?: AttachmentWhereInput | undefined;
}
