const chalk = require("chalk");

class Logger {
  constructor(name) {
    this.name = name;
  }

  info(message) {
    console.log(chalk.yellow(`[${this.name}]: ${message}`));
  }

  warning(message) {
    console.log(chalk.red(`[${this.name}]: ${message}`));
  }
}

module.exports = Logger;
