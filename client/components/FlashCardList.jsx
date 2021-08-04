import React from 'react';
import Flashcard from './FlashCard.jsx';


const FlashCardList = ( { flashcards } ) => {

  return (
    <div className='cardGrid left-column'>
      {flashcards.map(card => {
        return <Flashcard flashcard={card} key={card._id} flashcards={flashcards}/>
      })}
    </div>
  )
}

export default FlashCardList;