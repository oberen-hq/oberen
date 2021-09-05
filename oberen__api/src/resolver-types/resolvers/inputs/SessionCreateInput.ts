import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  device?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userAgent!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ip!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastLogged?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCurrent?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSessionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSessionsInput;
}