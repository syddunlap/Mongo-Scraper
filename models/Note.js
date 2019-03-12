const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String
});

const Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;