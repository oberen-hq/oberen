const Team = require("../models/Team");
const validator = require("validator");
const filter = require("leo-profanity");

// Get a team

const get_team = async (req, res) => {
  const teamId = req.params.id;

  console.log(teamId);

  try {
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({
        message: "That team was not found!",
      });
    }

    return res.status(200).json({
      name: team.name,
      email: team.email,
      region: team.region,
      description: team.description,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// Create a team

const create_team = async (req, res) => {
  const { name, email, number, region, description } = req.body;

  const validEmail = validator.isEmail(email);
  const validNumber = validator.isMobilePhone(number);

  if (name.length < 4 || name.length > 25) {
    return res.status(400).json({
      message: "Name must be 4-25 characters!",
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
    const existingTeam = await Team.findOne({ name: name });
    console.log(existingTeam);

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

// Edit a team

const edit_team = async (req, res) => {
  return;
};

// Delete a team

const delete_team = async (req, res) => {
  return;
};

module.exports = { create_team, get_team };
