const express = require("express");

const app = express();

const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const multer = require("multer");
const uuid = require("uuid-random");
const connectDB = require("./config/db");

const dotenv = require("dotenv").config();
const path = require("path");

const bodyParser = require("body-parser");

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const User = require("./models/User");

connectDB();

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

app.use(
  session({
    genid: (req) => {
      return uuid();
    },
    maxAge: 60 * 60 * 8,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URL }),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postsRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
