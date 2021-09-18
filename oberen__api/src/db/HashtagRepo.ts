// IMPORTS

import executeOrFail from "src/utils/executeOrFail";

import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
import { HashtagDataType, massOptions } from "./types/index";
import { Hashtag } from "../resolver-types/models";

// CODE

export default class HashtagRepo extends PrismaClient {
  /**
   * Create a hashtag
   *
   * @param   userId
   * @param   hashtagData
   * @returns {hashtag} The created hashtag
   *
   * **/

  create = async (userId: string, hashtagData: HashtagDataType): Promise<Hashtag | ApolloError> => {
    return executeOrFail(async () => {
        try {
            const createHashtagType = this.hashtag.create;
            type HashtagType = Parameters<typeof createHashtagType>[0]["data"]; // Define types of hashtag

            const hashtag: HashtagType = {
                name: hashtagData.name,
                creator: {
                    connect: {
                        id: userId
                    }
                }
            }

            // Create the hashtag

            const createdHashtag = await this.hashtag.create({
                data: hashtag
            })

            return createdHashtag;
        } catch (err) {
            throw new ApolloError(err.message, "internal_server_error")
        } 
    })
  }
}
