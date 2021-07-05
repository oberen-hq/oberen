const express = require("express");

const app = express();

const multer = require("multer");
const { createMongooseConnection, serverStatus } = require("./config/db");

const dotenv = require("dotenv").config();
const path = require("path");

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRoute = require("./routes/Auth/auth");
const organizationRoute = require("./routes/Organization/organization");
const organizationsRoute = require("./routes/Organization/organizations");
// const docsRoute = require("./routes/Docs/docs");

const browserEnv = require("browser-env");

const auth = require("./middleware/auth");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Used to store files from conversations

app.use("/images", express.static(path.join(__dirname, "public/cdn")));

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

app.use(morgan("dev"));

createMongooseConnection().then((res) => {
  console.log("Database has connected.");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/cdn");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json({
      message: "File was uploaded.",
    });
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/organization", organizationRoute);

// app.use("/api", docsRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Welcome to the API",
  });
});

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

app.get("/protected", auth, (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Authorized",
  });
});

const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  path: "/messages",
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
