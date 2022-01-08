"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Post_1 = __importDefault(require("./resolvers/Post"));
const User_1 = __importDefault(require("./resolvers/User"));
const Post_2 = __importDefault(require("./entities/Post"));
const User_2 = __importDefault(require("./entities/User"));
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.DATABASE_USERNAME || "postgres",
        password: process.env.DATABASE_PASSWORD || "postgres",
        database: process.env.DATABASE_NAME || "api",
        entities: [Post_2.default, User_2.default],
        migrations: [path_1.default.join(__dirname, "/migrations/*")],
        logging: false,
        synchronize: true,
    });
    const app = (0, express_1.default)();
    app.set("trust proxy", 1);
    app.use((0, cors_1.default)({
        origin: "*",
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [Post_1.default, User_1.default],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
        }),
    });
    yield apolloServer.start();
    yield apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.listen(process.env.PORT || 4000, () => {
        console.log("server started on http://localhost:4000");
    });
});
run().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map