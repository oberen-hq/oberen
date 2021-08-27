import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentOrderByInput } from "../../../inputs/AttachmentOrderByInput";
import { AttachmentScalarWhereWithAggregatesInput } from "../../../inputs/AttachmentScalarWhereWithAggregatesInput";
import { AttachmentWhereInput } from "../../../inputs/AttachmentWhereInput";
import { AttachmentScalarFieldEnum } from "../../../../enums/AttachmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  where?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttachmentOrderByInput], {
    nullable: true
  })
  orderBy?: AttachmentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "attachmentUrl" | "type" | "postId" | "reportId" | "creatorId">;

  @TypeGraphQL.Field(_type => AttachmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttachmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
