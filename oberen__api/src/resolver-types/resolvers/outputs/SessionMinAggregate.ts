import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SessionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  device!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userAgent!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastLogged!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCurrent!: boolean | null;
}
