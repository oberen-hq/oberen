import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentWhereInput } from "../inputs/AttachmentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentListRelationFilter {
  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  every?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  some?: AttachmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentWhereInput, {
    nullable: true
  })
  none?: AttachmentWhereInput | undefined;
}
