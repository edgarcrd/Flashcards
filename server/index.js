const express = require('express');
const app = express();
const path = require('path');
const db = require('../database');
const bodyParser = require('body-parser');
const controllers = require('../database/controllers/cards.js');

const port = 3000;

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/flashcards', (req, res) => {
  // console.log(req.body);
  controllers.addCard(req.body);
})

app.get('/categories', (req, res) => {
  // console.log(req.query.category)
  controllers.getCategory(req.query.category)
  .then(data => {
    // console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
})

app.get('/allData', (req, res) => {
  // console.log(req.query.category)
  controllers.getAll()
  .then(data => {
    // console.log(data);
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});