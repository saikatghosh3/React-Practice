import React, { useState } from 'react'

function UseCounter(inititalValue =0, step = 1) {
  const [count, setCount] = useState(inititalValue);
  const increment = ()=>{
    setCount(count + step);
  };
  const decrement =()=>{
    setCount(count - step);
  };
  return{count, increment, decrement };
}
export default UseCounter;

// This is a custom hook example
