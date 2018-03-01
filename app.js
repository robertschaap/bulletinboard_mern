const express = require("express");
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => console.log(`Now listening on port ${myport}`));

// Database Setup
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/flashcardapp", { useMongoClient: true });
mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err");
mongoose.Promise = global.Promise;

const Comment = require("./models/comment");

// Routes
app.get("/api/comment/", (req, res) => {
  res.json("retrieved");
});

app.post("/api/comment/new", (req, res) => {
  res.json("posted");
});
