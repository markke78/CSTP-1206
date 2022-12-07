const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true
  }
});

module.exports = BookSchema;

