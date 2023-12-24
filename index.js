const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("We are in twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>We are in login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>We are in youtube</h2>");
});
app.get("/github", (req, res) => {
  res.send("<h2>We are in github</h2>");
});
console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
