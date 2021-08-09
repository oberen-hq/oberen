import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentScalarWhereInput } from "../inputs/AttachmentScalarWhereInput";
import { AttachmentUpdateManyMutationInput } from "../inputs/AttachmentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => AttachmentScalarWhereInput, {
    nullable: false
  })
  where!: AttachmentScalarWhereInput;

  @TypeGraphQL.Field(_type => AttachmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttachmentUpdateManyMutationInput;
}
