// IMPORTS

import executeOrFail from "src/utils/executeOrFail";

import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
import { HashtagDataType, massOptions  } from "./types/index";
import { Hashtag } from "../resolver-types/models";

// CODE