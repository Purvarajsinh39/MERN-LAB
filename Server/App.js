import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/Db.js";

const App = express();

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

App.get("/", (req, res) => {
  res.send("API Is Running");
})

App.listen(PORT, () => console.log(`App is running on port ${PORT}`));

connectDB().then(() => {
  App.listen(PORT, () => console.log(`Concneted To the Db`))
});