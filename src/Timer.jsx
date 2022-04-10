import React, {useState, useEffect, useRef} from 'react';

function setDefaultValue() {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

export  const Timer = () => {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  const handleStart = () => { 
    setIsCount(true);
  }

  const handleStop = () => {
    setIsCount(false);
  }
  
  const handleReset = () => {
    setIsCount(false)
    setCount(0)
  } 

  useEffect(() => {
    localStorage.setItem('count', count);
    
  }, [count]);

  useEffect(() => {
    if( isCounting) {
      timerIdRef.current  = setInterval(() => {
        setCount((prevCount)=> prevCount + 1)
      }, 1000)
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, [isCounting])

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button 
          className='btn'
          onClick={handleStart}
        >
          Start
        </button>
      ) : (<button 
      className='btn'
      onClick={handleStop}
    >
      Stop
    </button>)}
    <button 
      className="btn"
      onClick={handleReset}
      >
      Reset
    </button>
    </div>
  ) 
};
