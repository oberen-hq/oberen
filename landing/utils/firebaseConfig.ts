import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.fireBaseApiKey as string,
  authDomain: "landing-page-69.firebaseapp.com",
  projectId: "landing-page-69",
  storageBucket: "landing-page-69.appspot.com",
  messagingSenderId: "187308994314",
  appId: "1:187308994314:web:d3fa7ed1295daa40ca94f3",
  measurementId: "G-VHW3ZMQ3MZ",
};

export default firebaseConfig;
