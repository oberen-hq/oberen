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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const config_1 = require("./config");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield core_1.MikroORM.init({
        dbName: "api",
        clientUrl: process.env.DATABASE_URL,
        user: "postgres",
        password: "postgres",
        type: "postgresql",
        debug: !config_1.__prod__,
    });
});
run().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map