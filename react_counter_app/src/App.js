import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  // State: manage the counter value in the parent component
  const [count, setCount] = useState(0);

  // Handlers passed down to the child via props
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <p>Demonstration of props and state (parent → child)</p>

        {/* Pass data and handlers to the child component via props */}
        <Counter
          label="Main Counter"
          value={count}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </header>
    </div>
  );
}

export default App;
