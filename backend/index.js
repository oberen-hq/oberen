// IMPORTS

const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  path: "/messages",
});

const multer = require("multer");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRoute = require("./routes/Auth/auth");
const organizationRoute = require("./routes/Organization/organization");
const organizationsRoute = require("./routes/Organization/organizations");
const statusRoute = require("./routes/Status/status");

const auth = require("./middleware/auth");
const constant = require("./config/constants/constants");

const Uploader = require("./helpers/Uploader");

// CORS SETUP

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Used to store files from conversations

app.use("/cdn", express.static(path.join(__dirname, "public/cdn")));

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Await Database connection

createMongooseConnection().then((res) => {
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

// Routes

app.use("/api", statusRoute);
app.use("/api/auth", authRoute);
app.use("/api/organization", organizationRoute);

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
