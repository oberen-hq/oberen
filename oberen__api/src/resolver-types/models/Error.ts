import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { ErrorType } from "../enums/ErrorType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Error {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ErrorType, {
    nullable: false
  })
  type!: "internal" | "authentication" | "timeout" | "unavailable";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  route?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
