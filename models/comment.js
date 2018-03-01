const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  title: String,
  body: String,
  avatar: String,
  name: String
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
