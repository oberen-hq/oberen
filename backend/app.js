const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const Logger = require("./helpers/Logger");

// Constants
const logger = new Logger("Development");
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware

app.use(morgan(process.env.MORGAN));

app.listen(PORT, () => {
  logger.info(`Server starting on http://localhost:${PORT}`);
});
