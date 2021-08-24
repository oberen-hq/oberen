const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("./lib/inquirer");
const setup = require("./lib/setup");

setup();

const run = async () => {
  const option = await inquirer.askOptions();
  
};

setTimeout(() => {
  run();
}, 3000);
