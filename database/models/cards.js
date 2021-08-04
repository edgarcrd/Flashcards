const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  question: String,
  answer: String,
  category: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;