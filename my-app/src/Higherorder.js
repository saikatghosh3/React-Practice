import React, {useState} from 'react'

function Higherorder() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Higher order function</h1>
        {/* Example 1 */}
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  )
}

export default Higherorder