const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

// Export the Comment model
module.exports = Comment;