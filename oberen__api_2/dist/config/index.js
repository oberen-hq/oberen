"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__prod__ = exports.PORT = exports.ACCESS_SECRET = exports.DATABASE_PASSWORD = exports.DATABASE_USERNAME = exports.DATABASE_NAME = void 0;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
exports.DATABASE_USERNAME = process.env.DATABASE_USERNAME;
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
exports.ACCESS_SECRET = process.env.ACCESS_SECRET;
exports.PORT = process.env.ACCESS_SECRET || 4000;
exports.__prod__ = process.env.NODE_ENV === "production" ? true : false;
//# sourceMappingURL=index.js.map