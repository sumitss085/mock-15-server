const express = require("express");
const cors = require("cors");
const connection = require("./Config/db");
const bodyParser = require("body-parser");
const Userrouter = require("./Routes/User.routes");
const authenticate = require("./Middleware/authentication");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", Userrouter);
app.use(authenticate);
app.use(bodyParser.json())





app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server running at port ${process.env.PORT}`);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
});
