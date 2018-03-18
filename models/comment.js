const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  title: String,
  body: String,
  avatar: String,
  name: String
}, { timestamps: true });

CommentSchema.statics.new = (title, body, avatar, name) => {
  let record = new Comment({ 
    title, 
    body, 
    avatar, 
    name 
  });
  return record.save();
};

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
