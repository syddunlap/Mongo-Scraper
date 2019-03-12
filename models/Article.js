const mongoose = require('mongoose');

const {Schema} = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  summary: {
    type: String,
  },
  source: {
    type: String,
    required: true,
  },
  sourceLink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
