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
const pino = require("express-pino-logger");

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

app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError() {
      if (
        error.status !== 404 ||
        error.status !== 500 ||
        error.status !== 401 ||
        error.status !== 409
      ) {
        return true;
      } else {
        return false;
      }
    },
  })
);

// CORS SETUP

// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   })
// );

// Used to store files from conversations

app.use("/cdn", express.static(path.join(__dirname, "public/cdn")));

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

// Logger

app.use(
  pino({
    prettyPrint: { colorize: true },
  })
);

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

app.get("/protected", auth, (req, res) => {
  res.status(200).json({
    message: "Authorized",
  });
});

app.get("/user", auth, (req, res) => {
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
