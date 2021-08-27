import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyCreatorInputEnvelope } from "../inputs/AttachmentCreateManyCreatorInputEnvelope";
import { AttachmentCreateOrConnectWithoutCreatorInput } from "../inputs/AttachmentCreateOrConnectWithoutCreatorInput";
import { AttachmentCreateWithoutCreatorInput } from "../inputs/AttachmentCreateWithoutCreatorInput";
import { AttachmentWhereUniqueInput } from "../inputs/AttachmentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [AttachmentCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: AttachmentCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: AttachmentCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: AttachmentCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttachmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AttachmentWhereUniqueInput[] | undefined;
}
