import { __prod__ } from "../config";
import { createLogger, format, transports, config } from "winston";

const logger = createLogger({
  transports: [
    new transports.Console({
      level: __prod__ ? "info" : "debug",
      format: __prod__ ? format.prettyPrint() : format.json(),
    }),
    // new transports.File({
    //   filename: `api-errors-${Date.now()}.log`,
    //   level: "error",
    // }),
    // new transports.File({
    //   filename: "combined.log",
    // }),
  ],
});

export default logger;
