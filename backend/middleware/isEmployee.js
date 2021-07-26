const isEmployee = (req, res, next) => {
  try {
    const chosenPositions = req.headers.chosenPositions || null;

    if (!chosenPositions) {
      return res.status(401).json({
        message: "No chosen position!",
      });
    }

    if (!chosenPositions.includes("Employee")) {
      return res.status(401).json({
        message: "You must be an employee to access this!",
      });
    }

    next();
  } catch (err) {
    res.status(500).json({
      message: "Not a valid member",
    });
  }
};

module.exports = isEmployee;
