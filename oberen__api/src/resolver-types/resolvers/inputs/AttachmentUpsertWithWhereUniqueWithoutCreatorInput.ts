import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateWithoutCreatorInput } from "../inputs/AttachmentCreateWithoutCreatorInput";
import { AttachmentUpdateWithoutCreatorInput } from "../inputs/AttachmentUpdateWithoutCreatorInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: AttachmentUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => AttachmentCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: AttachmentCreateWithoutCreatorInput;
}
