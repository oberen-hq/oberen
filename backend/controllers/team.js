const Team = require("../models/Team");
const validator = require("validator");
const filter = require("leo-profanity");

const create_team = async (req, res) => {
  const { name, email, number, region, description } = req.body;

  const validEmail = validator.isEmail(email);
  const validNumber = validator.isMobilePhone(number);

  if (name.length < 4 || name.length > 15) {
    return res.status(400).json({
      message: "Name must be greater than 4-15 characters!",
    });
  }

  if (description.length < 10 || description.length > 500) {
    return res.status(400).json({
      message: "Description must be 10-500 characters!",
    });
  }

  if (filter.check(description)) {
    return res.status(400).json({
      message: "Bad profanity detected in description.",
    });
  }

  if (filter.check(name)) {
    return res.status(400).json({
      message: "Bad profanity detected in team name.",
    });
  }

  if (!validEmail) {
    return res.status(400).json({
      message: "Please provide a valid email address.",
    });
  }

  if (!validNumber) {
    return res.status(400).json({
      message: "Please provide a valid phone number.",
    });
  }

  try {
    const existingTeam = Team.findOne({ name: name });

    if (existingTeam) {
      return res.status(409).json({
        message: "A team with that name already exists!",
      });
    }

    const result = await Team.create({
      name,
      email,
      number,
      region,
      description,
    });

    return res.status(200).json({
      result,
      message: "Team created!",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

const edit_team = async (req, res) => {
  return;
};

const delete_team = async (req, res) => {
  return;
};
