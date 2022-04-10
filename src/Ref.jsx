import React, { useRef, useEffect, useState } from 'react';

export const WithRef = () => {
  // const inputEl = useRef(null);
  // console.log(inputEl);

  const numRef = useRef(null);  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // console.log('hello i am useEffect', console.log(inputEl))
    // console.log('hello i am useEffect', console.log(numRef.current))
  }, []);
  
  const handleClick = () => {
    // numRef.current =  1;
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      {/* <input 
        type='text' 
        placeholder='name' 
        className='field' 
        ref={inputEl}
      /> */}

    <button 
    className='btn'
    onClick={handleClick}>
      
      {count}
    </button>

    </div>
  );
};
