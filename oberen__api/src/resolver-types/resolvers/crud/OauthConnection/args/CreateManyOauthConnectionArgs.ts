import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionCreateManyInput } from "../../../inputs/OauthConnectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOauthConnectionArgs {
  @TypeGraphQL.Field(_type => [OauthConnectionCreateManyInput], {
    nullable: false
  })
  data!: OauthConnectionCreateManyInput[];
}
