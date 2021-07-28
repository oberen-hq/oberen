const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");

function getCurrentTime() {
  const date = new Date();

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

function clock(time) {
  const { hour, minute } = time;

  return `${hour}:${minute}`;
}

module.exports = () => {
  clear();
  console.log(
    chalk.green(figlet.textSync("Simplify", { horizontalLayout: "full" }))
  );
  console.log(chalk.greenBright(clock(getCurrentTime())));
};
