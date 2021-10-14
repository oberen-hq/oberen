// IMPORTS

import executeOrFail from "../utils/executeOrFail";

import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
import { ErrorDataType, massOptions } from "./types/index";
import { Error } from "../resolver-types/models";

// CODE

export default class ErrorRepo extends PrismaClient {
    /**
   * Create an error
   *
   * @param   userId
   * @param   errorData
   * @returns {error} The created error
   *
   * **/

    create = async (
        userId: string,
        errorData: ErrorDataType
    ): Promise<Error | ApolloError> => {
        return executeOrFail(async () => {
           const createErrorType = this.error.create;
           type ErrorType = Parameters<typeof createErrorType>[0]["data"]

           const error: ErrorType = {
               type: errorData.type,
               description: errorData.description,
               route: errorData.route,
               user: {
                   connect: {
                       id: userId
                   }
               }
           }

           return await this.error.create({
               data: error
           })
        })
    }

    findById = async (
        errorId: string
    ): Promise<Error | ApolloError> => {
        return executeOrFail(async () => {
            const error = await this.error.findFirst({
                where: {
                    id: errorId
                },
                include: {
                    user: true
                }
            });

            if (!error) {
                throw new ApolloError(
                    "Couldn't find an error with that id",
                    "error_not_found"
                );
            }

            return error;
        })
    }
}