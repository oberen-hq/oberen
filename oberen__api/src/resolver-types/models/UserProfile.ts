import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Label } from "../models/Label";
import { User } from "../models/User";
import { UserSettings } from "../models/UserSettings";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserProfile {
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

  user?: User | null;

  settings?: UserSettings | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarURL?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  labels?: Label[];
}
