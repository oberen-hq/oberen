// IMPORTS

import { Router } from "express";
import { Strategy } from "passport-github2";
import { PassportStatic } from "passport";
import {fetchOauthClientInfo} from "../utils/";

// CODE

const GithubOAuth = (passport: PassportStatic) => {
    const oauthInfo = fetchOauthClientInfo("github");
}