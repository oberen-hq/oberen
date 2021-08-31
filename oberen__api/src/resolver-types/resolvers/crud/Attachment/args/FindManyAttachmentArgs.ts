import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentOrderByInput } from "../../../inputs/AttachmentOrderByInput";
import { AttachmentWhereInput } from "../../../inputs/AttachmentWhereInput";
import { AttachmentWhereUniqueInput } from "../../../inputs/AttachmentWhereUniqueInput";
import { AttachmentScalarFieldEnum } from "../../../../enums/AttachmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAttachmentArgs {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  where?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttachmentOrderByInput], {
    nullable: true
  })
  orderBy?: AttachmentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: AttachmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "url" | "type" | "postId"> | undefined;
}
