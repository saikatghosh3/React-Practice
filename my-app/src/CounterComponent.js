import React from 'react'
import UseCounter from './UseCounter';


const CounterComponent = () => {
 const {count, increment, decrement} = UseCounter();

  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterComponent