// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  // State variable to hold array of languages and their votes
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 }, // Corrected spelling of "JavaScript"
    { name: "Java", votes: 0 }
  ]);

  // Function to increase the votes of a language by one
  const increaseVote = (index) => {
    // Create a copy of the languages array
    const updatedLanguages = [...languages];
    // Increase the votes of the selected language by one
    updatedLanguages[index].votes += 1;
    // Update the state with the new array
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      {/* Map over the languages array and create a button for each language */}
      {languages.map((language, index) => (
        <div key={index}>
          <button onClick={() => increaseVote(index)}>
            {language.name} - Votes: {language.votes}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
