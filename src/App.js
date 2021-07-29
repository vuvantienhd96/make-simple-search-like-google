import React from 'react';
import './style.css';
import Test from './Test';

const data = [
  {
    label: 'Cheddar',
    value: 1
  },
  {
    label: 'Manchego',
    value: 2
  }
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Test />
    </div>
  );
}
