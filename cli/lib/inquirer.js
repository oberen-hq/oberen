const inquirer = require("inquirer");

module.exports = {
  askOptions: () => {
    const questions = [
      {
        name: "Options",
        type: "input",
        message: "What would you like to do: ",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter an option.";
          }
        },
      },
    ];

    return inquirer.prompt(questions);
  },
};
