import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateWithoutPostInput } from "../inputs/AttachmentCreateWithoutPostInput";
import { AttachmentUpdateWithoutPostInput } from "../inputs/AttachmentUpdateWithoutPostInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => AttachmentWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateWithoutPostInput, {
    nullable: false
  })
  update!: AttachmentUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => AttachmentCreateWithoutPostInput, {
    nullable: false
  })
  create!: AttachmentCreateWithoutPostInput;
}
