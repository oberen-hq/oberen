// IMPORTS

import { ClientInfo } from "../types/";

// CODE

export function fetchOauthClientInfo(
    provider: "github" | "google" | "discord" | "twitter" | "facebook" | "apple" | "instagram" | "linkedin"
) {
    let info: ClientInfo;
    const cbUrl = `http://localhost:${process.env.PORT as string}/api/auth/${provider as string}`

    switch (provider) {
        case "github":
            info = {
                clientId: process.env.GITHUB_CLIENT_ID!,
                clientSecret: process.env.GITHUB_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "google":
            info = {
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "discord":
            info = {
                clientId: process.env.DISCORD_CLIENT_ID!,
                clientSecret: process.env.DISCORD_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "twitter":
            info = {
                clientId: process.env.TWITTER_CLIENT_ID!,
                clientSecret: process.env.TWITTER_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "facebook":
            info = {
                clientId: process.env.FACEBOOK_CLIENT_ID!,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "apple":
            info = {
                clientId: process.env.APPLE_CLIENT_ID!,
                clientSecret: process.env.APPLE_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "instagram": 
            info = {
                clientId: process.env.INSTAGRAM_CLIENT_ID!,
                clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        case "linkedin":
            info = {
                clientId: process.env.LINKEDIN_CLIENT_ID!,
                clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
                cbUrl
            };
            return info;
        default:
            throw new Error("Invalid arguments for fetchOauthClientInfo")
    }
}