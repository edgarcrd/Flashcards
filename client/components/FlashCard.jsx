import React, { useState, useEffect } from 'react';

const FlashCard = ( { flashcard, flashcards } ) => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [flashcards])

  return (
    <div className={`card ${toggle ? 'toggle' : ''}`} onClick={() => setToggle(!toggle)}>
      <div className='question'>
        {flashcard.question}
      </div>
      <div className='answer'>
        {flashcard.answer}
      </div>
    </div>
  )
}

export default FlashCard;