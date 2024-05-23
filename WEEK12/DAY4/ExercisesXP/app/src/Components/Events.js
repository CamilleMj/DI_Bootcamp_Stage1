import React, { useState } from 'react';

const clickMe = () => {
  alert('I was clicked');
};

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('React');
    }
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>

      <input type="text" onKeyDown={handleKeyDown} />

      <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;