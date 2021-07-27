const isAdmin = (req, res, next) => {
  try {
    const admin = req.headers.admin || null;

    if (!admin) {
      res.status(409).json({
        type: "Permission",
        message: "You are not authenticated to use this resource.",
      });
    }

    next();
  } catch (err) {
    res.status(409).json({
      type: "Permission",
      message: "You are not authenticated to use this resource.",
    });
  }
};
