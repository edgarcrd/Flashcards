import React from 'react';
import Flashcard from './FlashCard.jsx';


const FlashCardList = ( { flashcards } ) => {

  return (
    // <div className='cardGrid left-column'>
    <div class="cont">
      {/* <div className='row row-cols-1 row-cols-md-2 g-2'> */}
        {flashcards.map(card => {
          return <Flashcard flashcard={card} key={card._id} flashcards={flashcards}/>
        })}
      {/* </div> */}
    </div>
  )
}

export default FlashCardList;