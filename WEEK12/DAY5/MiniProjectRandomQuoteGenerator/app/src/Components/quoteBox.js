import React, { useState } from 'react';
import quotes from './quotes';

function QuoteBox() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateNewQuote() {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote === currentQuote);

    setCurrentQuote(newQuote);
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: quoteColor }}>{currentQuote.quote}</h2>
      <p style={{ color: quoteColor }}>- {currentQuote.author}</p>
      <button
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer',
        }}
        onClick={generateNewQuote}
      >
        Generate New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
