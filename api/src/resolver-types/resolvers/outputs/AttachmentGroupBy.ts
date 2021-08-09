import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCountAggregate } from "../outputs/AttachmentCountAggregate";
import { AttachmentMaxAggregate } from "../outputs/AttachmentMaxAggregate";
import { AttachmentMinAggregate } from "../outputs/AttachmentMinAggregate";
import { AttachmentType } from "../../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentUrl!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "organization" | "post" | "other";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reportId!: string;

  @TypeGraphQL.Field(_type => AttachmentCountAggregate, {
    nullable: true
  })
  _count!: AttachmentCountAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentMinAggregate, {
    nullable: true
  })
  _min!: AttachmentMinAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentMaxAggregate, {
    nullable: true
  })
  _max!: AttachmentMaxAggregate | null;
}
