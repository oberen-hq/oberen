import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Label {
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
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  uses!: number;

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  profile?: UserProfile | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profileId?: string | null;
}
