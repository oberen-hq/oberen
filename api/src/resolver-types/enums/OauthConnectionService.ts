import * as TypeGraphQL from "type-graphql";

export enum OauthConnectionService {
  github = "github",
  google = "google",
  discord = "discord",
  twitter = "twitter",
  facebook = "facebook",
  apple = "apple",
  instagram = "instagram",
  linkedin = "linkedin",
  local = "local"
}
TypeGraphQL.registerEnumType(OauthConnectionService, {
  name: "OauthConnectionService",
  description: undefined,
});
