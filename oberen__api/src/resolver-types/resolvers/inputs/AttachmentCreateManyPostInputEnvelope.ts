import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCreateManyPostInput } from "../inputs/AttachmentCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [AttachmentCreateManyPostInput], {
    nullable: false
  })
  data!: AttachmentCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
