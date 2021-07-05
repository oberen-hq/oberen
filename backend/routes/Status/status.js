const router = require("express").Router();
const serverStatus = require("../../config/db");

// Return status of each component

app.get("/status", (req, res) => {
  const dbStatusCode = serverStatus();

  let databaseStatusMessages = [
    "Disconnected: Major Outage",
    "Connected: No issues",
    "Connecting: Potential outage",
    "Disconnecting: Potential outage",
    "Invalid Credentials: Major Outage",
  ];

  try {
    res.status(200).json({
      apiStatus: res.statusCode,
      databaseStatus: databaseStatusMessages[dbStatusCode],
      socketIO: "OK",
    });
  } catch (err) {
    res.status(500).json({
      apiStatus: res.statusCode,
      databaseStatus: databaseStatusMessages[dbStatusCode],
      socketIO: "FAILURE",
    });
  }
});

module.exports = router;
