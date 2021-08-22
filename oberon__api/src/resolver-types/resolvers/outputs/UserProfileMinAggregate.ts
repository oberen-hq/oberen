import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserProfileMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  status!: "online" | "idle" | "dnd" | "other" | "offline" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio!: string | null;
}
