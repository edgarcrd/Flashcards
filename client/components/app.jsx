import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Flashcardlist from './FlashCardList.jsx';
import Form from './Form.jsx';
import './style.css'
import axios from 'axios';
// import Sample from '../../database/sample.js'


const App = () => {

  const Sample = [
    {
      id: 1,
      question: 'What is a callback function?',
      answer: 'A function that is passed to another function as a parameter'
    },
    {
      id: 2,
      question: 'What is a closure?',
      answer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)'
    },
    {
      id: 3,
      question: 'Explain what the operator "new" does',
      answer: 'The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function'
    },
    {
      id: 4,
      question: 'Explain what the apply() method does ',
      answer: 'calls a function with a given this value, and arguments provided as an array (or an array-like object).'
    },
    {
      id: 5,
      question: 'Explain what the call() method does ',
      answer: 'calls a function with a given this value and arguments provided individually.'
    },
    {
      id: 6,
      question: 'Explain what the bind() method does ',
      answer: 'creates a new function that, when called, has its this keyword set to the provided value.'
    }
  ];


  const [flashcards, setFlashCards] = useState([]);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  // const reset = () => {
  //   let randomArr = flashcards.sort(() => Math.random() - 0.5)
  //   // console.log(Sample);
  //   setFlashCards(randomArr);
  // }

  useEffect(() => {
    axios.get('/allData')
    .then(data => {
      // console.log(data.data);
      setCategories(data.data)
    })
  }, [flashcards])

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(category);
    axios.get('/categories', {
      params: {
        category: category
      }
    })
    .then(data => {
      // console.log(data);
      setFlashCards(data.data.sort(() => Math.random() - 0.5));
    })
    setCategory('');
  }

  return (
    <div className='container'>
      <h1>Flash Cards</h1>
      {/* <button className='button' onClick={() => setFlashCards()}>start</button>
      <button className='button' onClick={() => reset()}>reset</button> */}
      <label >Pick the Category</label>
        <select type="text" value={category} required onChange={e => setCategory(e.target.value)}>
        <option></option>
        {categories.map((category) => {
                  //  console.log(category);
                   return (<option value={category}>{category}</option>)
                 })
                 }
          {/* <option></option>
          <option>ME</option>
          <option>CS</option>
          <option>Software Engineering</option> */}
        </select>
        <button type="submit" value="Submit" onClick={e => onSubmit(e)}>Enter</button>
      <Form setCategories={setCategories} setFlashCards={setFlashCards} />
      {/* <h1>App.js is connected and working!</h1> */}
      <Flashcardlist flashcards={flashcards}/>
    </div>
  )
}

export default App;