import chalk from "chalk";
import moment from "moment";

export default class {
  log(content: any, type: string = "log") {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
      case "log": {
        return console.log(
          `${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `
        );
      }
      case "warn": {
        return console.log(
          `${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `
        );
      }
      case "error": {
        return console.log(
          `${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `
        );
      }
      case "debug": {
        return console.log(
          `${timestamp} ${chalk.green(type.toUpperCase())} ${content} `
        );
      }
      case "cmd": {
        return console.log(
          `${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`
        );
      }
      case "ready": {
        return console.log(
          `${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`
        );
      }
      default:
        throw new TypeError(
          "Logger type must be either warn, debug, log, ready, cmd or error."
        );
    }
  }

  error(args: any) {
    this.log(args, "error");
  }

  warn(args: any) {
    this.log(args, "warn");
  }

  debug(args: any) {
    this.log(args, "debug");
  }

  cmd(args: any) {
    this.log(args, "cmd");
  }
}
