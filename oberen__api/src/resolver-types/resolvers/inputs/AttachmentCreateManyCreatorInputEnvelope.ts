import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyCreatorInput } from "../inputs/AttachmentCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [AttachmentCreateManyCreatorInput], {
    nullable: false
  })
  data!: AttachmentCreateManyCreatorInput[];
}
