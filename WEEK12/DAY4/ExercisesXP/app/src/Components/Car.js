// import React from "react";

// const Car = ({ carInfo }) => {
//   return (
//     <div>
//       <h1>This car is {carInfo.model}</h1>
//     </div>
//   );
// };

// export default Car;

import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color, setColor] = useState('red');

  return (
    <div>
      <h1>This car is {color} {carInfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;