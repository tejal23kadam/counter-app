import './App.css';
import { useState } from 'react';

function App() {

  let[digit,updateDigit] = useState(0);
  
  const increment = () =>{
    if(digit >=0)
      updateDigit(digit+1);    
  }
  const decrement = () =>{
    if(digit >=1)
      updateDigit(digit-1);   
  }
  return (
    <div className="myClass">
      <div>
        <h1>{digit}</h1>
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

    </div>
  );
}

export default App;
