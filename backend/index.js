// IMPORTS

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  path: "/messages",
});

const { createMongooseConnection } = require("./config/db");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const authRoute = require("./routes/Auth/auth");
const organizationRoute = require("./routes/Organization/organization");
const organizationsRoute = require("./routes/Organization/organizations");
const statusRoute = require("./routes/Status/status");
const jobsRoute = require("./routes/Jobs/jobs");
const auth = require("./middleware/auth");
const constant = require("./config/constants/constants");
const Uploader = require("./helpers/upload");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const morgan = require("morgan");
const config = require("./config/constants/constants");
const User = require("./models/User");

// SENTRY SETUP

Sentry.init({
  dsn: config.sentry_dsn(),
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

// CORS SETUP

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Used to store files from conversations

app.use("/cdn", express.static(path.join(__dirname, "public/cdn")));

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

// Logger

app.use(morgan("dev"));

// Await Database connection

createMongooseConnection().then(() => {
  console.log("Database has connected.");
});

// Setup memory storage for cdn

const uploader = new Uploader();

// Standard endpoints

app.get("/", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Welcome to the API",
  });
});

app.post("/api/upload", uploader.startUpload);

app.get("/api/protected", auth, (req, res) => {
  res.status(200).json({
    message: "Authorized",
  });
});

app.get("/api/user", auth, (req, res) => {
  let currentUser = User.findById(req.userId);

  res.status(200).json({
    name: currentUser.name,
    email: currentUser.email,
    industries: currentUser.industries,
  });
});

// Routes

app.use("/api", statusRoute);
app.use("/api/auth", authRoute);
app.use("/api/organization", organizationRoute);
app.use("/api/status", statusRoute);
app.use("/api/jobs", jobsRoute);

// 404 Route

app.get("*", (req, res) => {
  res.status(404).json({
    path: req.originalUrl,
    message: "This API Endpoint doesn't exist",
  });
});

// SocketIO initialization

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Listening on port 3000

http.listen(constant.port(), () => {
  console.log("Backend server is running!");
});
