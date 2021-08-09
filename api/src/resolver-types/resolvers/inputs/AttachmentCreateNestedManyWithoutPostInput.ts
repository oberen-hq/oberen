import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyPostInputEnvelope } from "../inputs/AttachmentCreateManyPostInputEnvelope";
import { AttachmentCreateOrConnectWithoutPostInput } from "../inputs/AttachmentCreateOrConnectWithoutPostInput";
import { AttachmentCreateWithoutPostInput } from "../inputs/AttachmentCreateWithoutPostInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutPostInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;
}
