import React, { useState, useEffect } from 'react';

import  './App.css';

export const  Clicker = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log('useEffect', count);
    
    return () => console.log('userEffect say goodbye')
  }, [count]);

  // useEffect(() => {
  //   console.log('useEffect', count);
  // }, [count == 3]);
  return (
    <div className='container'>
      <section className='actions'>
        <button className='btn' onClick={increment}>
          +
        </button>

        <span className='field'>{count}</span>

        <button className='btn' onClick={decrement}>
          -
        </button>
      </section>
    </div>
  );
}
