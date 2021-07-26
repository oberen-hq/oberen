const isEmployer = (req, res, next) => {
  try {
    const chosenPositions = req.headers.chosenPositions || null;

    if (!chosenPositions) {
      return res.status(401).json({
        message: "No chosen position!",
      });
    }

    if (!chosenPositions.includes("Employer")) {
      return res.status(401).json({
        message: "You must be an employer to access this!",
      });
    }

    next();
  } catch (err) {
    res.status(500).json({
      message: "Not a valid member",
    });
  }
};

module.exports = isEmployer;
