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

export interface ClientInfo {
    clientId: string;
    clientSecret: string;
    cbUrl: string;
}