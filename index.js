const express = require("express");
const app = express();
const port = 4000;
// ------------external Middleware-----------
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// ------------external Middleware-----------
const createContact = require("./Routes/router");
// ----------------routes--------------------
app.use("/createContact", createContact);
// ----------------routes--------------------

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", (req, res) => {
  res.send("No Route Found");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
