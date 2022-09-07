import './App.css';
import React, { useState } from 'react';

function App() {
  console.log('Loading App comopnent....');

  /** 
   *  useState always returns an array, but we desctructure it for better readability
   *  - Initializing a state variable
   *  const arr = useState(4);
   *  const [count, setCount] = useState(4);
   * 
   * - Initializing a state variable using function
   * 
   * Blog witht he same concepts:
   * https://blog.webdevsimplified.com/2020-04/use-state/
   * 
  */

  const [count, setCount] = useState(0)

  const decrementCount = () => {
    // TODO: Decrement count by 1. 
    setCount((preCount) => preCount -1);
  }

  const incrementCount = () => {
    // TODO: Increse count by 1.
    setCount((preCount) => preCount +1); 
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <h1>Count:{count}</h1>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
