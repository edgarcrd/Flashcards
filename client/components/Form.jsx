import React, { useState } from 'react';
import axios from 'axios';

const Form = ( { setCategories, setFlashCards } ) => {

  const[question, setQuestion] = useState('');
  const[answer, setAnswer] = useState('');
  const[category, setCategory] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(question)
    var card = {
      question: question,
      answer: answer,
      category: category
    }
    // console.log(card)
    axios.post('/flashcards', card)
    .then(res => {
      console.log('cards rendered!')
    })
    .catch(err => {
      console.log(err);
    });
    setQuestion('');
    setAnswer('');
    setCategory('');

    axios.get('/allData')
    .then(data => {
      // console.log(data.data);
      setCategories(data.data)
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('/categories', {
      params: {
        category: category
      }
    })
    .then(data => {
      // console.log(data);
      setFlashCards(data.data);
    })
    .catch(err => {
      console.log(err);
    });

  }



  return (
    <div className="right-column">
      <form>
        <h2>Add Card</h2>
        <label >Question</label>
        <br></br>
        <input className="box" type="text" value={question} required onChange={e => setQuestion(e.target.value)}></input>
        <br></br>
        <br></br>
        <label >Answer   </label>
        <br></br>
        <input className="box" type="text" value={answer} required onChange={e => setAnswer(e.target.value)}></input>
        <br></br>
        <br></br>
        <label >Category</label>
        <br></br>
        <input className="box" type="text" value={category} required onChange={e => setCategory(e.target.value)}></input>
        <br></br>
        <button className="submit" type="submit" value="Submit" onClick={e => onSubmit(e)}>Submit</button>
      </form>

    </div>
  )
}

export default Form;