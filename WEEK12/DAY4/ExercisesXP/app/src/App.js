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

//Exercise 1 : Car And Components
import React from "react";
import Car from "./Components/Car";

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;


//Exercise 2 : Events
import React from "react";
import Events from "./Components/Events";

function App() {
  return (
    <div className="App">
      <Events />
    </div>
  );
}

export default App;

//Exercise 3 : Phone And Components
import React from 'react';
import Phone from './Components/Phone';

function App() {
  return (
    <div className="App">
      <Phone />
    </div>
  );
}

export default App;

//Exercise 4 : UseEffect Hook
import React from 'react';
import Phone from './Components/Color';

function App() {
  return (
    <div className="App">
       <Color />
    </div>
  );
}

export default App;

