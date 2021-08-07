import * as TypeGraphQL from "type-graphql";

export enum ConnectionService {
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
TypeGraphQL.registerEnumType(ConnectionService, {
  name: "ConnectionService",
  description: undefined,
});
