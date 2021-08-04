const Card = require('../models/cards.js');
const db = require('../../database/index.js');

const addCard = ({ question, answer, category }) => {
  // console.log(req);

  let newCard = new Card({
    question: question,
    answer: answer,
    category: category
  })

  return newCard.save((err, Card) => {
    if (err) return console.log(err);
    console.log(Card.id + "saved");
  })

};

const getCategory = ( category ) => {
  // console.log('hey', category);
  var query = Card.find({'category': category});
  return query;
}

const getAll = () => {
  // console.log('hey', category);
  var query = Card.distinct("category");
  return query;
}

module.exports = {
  addCard,
  getCategory,
  getAll
}
