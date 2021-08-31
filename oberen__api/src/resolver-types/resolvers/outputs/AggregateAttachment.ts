import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentCountAggregate } from "../outputs/AttachmentCountAggregate";
import { AttachmentMaxAggregate } from "../outputs/AttachmentMaxAggregate";
import { AttachmentMinAggregate } from "../outputs/AttachmentMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAttachment {
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
