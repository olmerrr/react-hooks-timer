import React, { useState } from 'react';
import { Clicker } from './Clicker'
import { WithRef } from './Ref'
import { Timer } from './Timer'


import './App.css';

export default function App() {
  const [isTimer, setTimer] = useState(false);

  return (
    <div className='container'>
      <button 
        className='btn'
        onClick={() => setTimer(!isTimer)}
        > Toggle Timer
      </button>
      
      {isTimer && <Timer />}
    </div>
  );
}
