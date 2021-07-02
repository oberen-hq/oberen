const express = require("express");

const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { v4 } = require("uuidv4");
const path = require("path");

const connectDB = require("./config/db");

connectDB();

app.use(cors());

// Used to store files from conversations

app.use("/images", express.static(path.join(__dirname, "public/cdn")));

// Middleware

app.use(express.json());
app.use(helmet());

app.use(
  session({
    genid: (req) => {
      return v4(); // use UUIDs for session IDs
    },
    store: new MongoStore({ mongoUrl: process.env.MONGO_URL }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(morgan("common"));

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

app.get("/", (req, res) => {
  res.send(`You hit home page!\n`);
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
