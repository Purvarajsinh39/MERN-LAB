import express from "express";
import cors from "cors";

const App = express();

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));


const PORT = 5000;

App.get("/", (req, res) => {
  res.send("API Is Running");
})

App.listen(PORT, () => console.log(`App is running on port ${PORT}`));