import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentCreateManyInput } from "../../../inputs/AttachmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAttachmentArgs {
  @TypeGraphQL.Field(_type => [AttachmentCreateManyInput], {
    nullable: false
  })
  data!: AttachmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
