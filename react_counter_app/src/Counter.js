import React from 'react';
import './App.css';

// Child component: receives `value`, `onIncrement`, `onDecrement`, and `label` as props
export default function Counter({ value, onIncrement, onDecrement, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{label}</h2>
      <div style={{ margin: '12px', fontSize: '2rem' }}>{value}</div>
      <div>
        <button onClick={onDecrement} style={{ marginRight: 8 }}>- Decrement</button>
        <button onClick={onIncrement}>+ Increment</button>
      </div>
    </div>
  );
}
