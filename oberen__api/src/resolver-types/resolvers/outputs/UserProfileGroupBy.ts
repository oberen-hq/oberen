import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCountAggregate } from "../outputs/UserProfileCountAggregate";
import { UserProfileMaxAggregate } from "../outputs/UserProfileMaxAggregate";
import { UserProfileMinAggregate } from "../outputs/UserProfileMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserProfileGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarURL!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio!: string | null;

  @TypeGraphQL.Field(_type => UserProfileCountAggregate, {
    nullable: true
  })
  _count!: UserProfileCountAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMinAggregate, {
    nullable: true
  })
  _min!: UserProfileMinAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMaxAggregate, {
    nullable: true
  })
  _max!: UserProfileMaxAggregate | null;
}
