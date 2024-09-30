import React, { useState } from 'react'
import Memochildren from './Memochildren'

const MemoParent = () => {
    const [count,setCount]=useState(0);
    console.log("parent component!!");
  return (
    <div>
        <h1>Meomo In React.</h1>
        <Memochildren/>

        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count + 1)}>Count +:</button>
    </div>
  )
}

export default MemoParent