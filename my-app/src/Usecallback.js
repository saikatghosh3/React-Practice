import React, { useState, useCallback } from 'react'
import ChildUsecallback from './ChildUsecallback';

const Usecallback = () => {
    // Normal example 
    const [count1, setCount1] = useState(0);
    console.log("parent Rendered!!");

    //Example 2
    const [count2,setCount2] = useState(0);
    const IncrementCount = useCallback(()=>{
        setCount2 ((prevCount)=> prevCount +1);
        console.log("Use call back hook!!");
    },[]);


  return (
    <div>
        <h1>useCallback Hook</h1>

        {/* Example 1 */}
        <p>Count1:{count1}</p>
        <button onClick={()=> setCount1(count1 +1)}> Increment count</button>
      <br/>
      <br/>
      {/* Example2 */}
      <p>Count2:{count2}</p>
      <ChildUsecallback increment={IncrementCount}/>
    
    </div>
  )
}

export default Usecallback