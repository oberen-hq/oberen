// IMPORTS

import executeOrFail from "../utils/executeOrFail";

import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
import { HashtagDataType, massOptions } from "./types/index";
import { Hashtag } from "../resolver-types/models";
import { transformDocument } from "@prisma/client/runtime";

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

  create = async (
    userId: string,
    hashtagData: HashtagDataType,
  ): Promise<Hashtag | ApolloError> => {
    return executeOrFail(async () => {
      try {
        const createHashtagType = this.hashtag.create;
        type HashtagType = Parameters<typeof createHashtagType>[0]["data"]; // Define types of hashtag

        const hashtag: HashtagType = {
          name: hashtagData.name,
          creator: {
            connect: {
              id: userId,
            },
          },
        };

        // Create the hashtag

        const createdHashtag = await this.hashtag.create({
          data: hashtag,
        });

        return createdHashtag;
      } catch (err) {
        throw new ApolloError(err.message, "internal_server_error");
      }
    });
  };

  /**
   * Find a hashtag by id
   *
   * @param   hashtagId
   * @returns {hashtag} The created hashtag
   *
   * **/

  findById = async (hashtagId: string): Promise<Hashtag | ApolloError> => {
    return executeOrFail(async () => {
      const hashtag = await this.hashtag.findFirst({
        where: {
          id: hashtagId,
        },
        include: {
          creator: true,
          posts: true,
        },
      });

      if (!hashtag) {
        throw new ApolloError(
          "Could not find a hashtag with that id",
          "hashtag_not_found",
        );
      }

      return hashtag;
    });
  };

  /**
   * Find a hashtag by name
   *
   * @param   hastagName
   * @returns {hashtag} The created hashtag
   *
   * **/

  findByName = async (hashtagName: string): Promise<Hashtag | ApolloError> => {
    return executeOrFail(async () => {
      const hashtag = await this.hashtag.findFirst({
        where: {
          name: hashtagName,
        },
        include: {
          creator: true,
          posts: true,
        },
      });

      if (!hashtag) {
        throw new ApolloError(
          "Couldn't find a hashtag with that name",
          "hashtag_not_found",
        );
      }

      return hashtag;
    });
  };

  findInMass = async (massOptions: massOptions): Promise<Hashtag[] | ApolloError> => {
    return executeOrFail(async () => {
      const hashtags = await this.hashtag.findMany({
        // Find hashtags based on the massOptions argument to filter posts
        skip: massOptions?.skip,
        take: massOptions?.limit,
        include: {
          creator: true,
          posts: true
        }
      });

      if (!hashtags) {
        throw new ApolloError("Couldn't find any hashtags", "hashtags_not_found")
      }

      return hashtags;
    })
  }
}
