import React, { useState,useMemo } from 'react'

const Memohook = () => {
//Example 1
const[number1, setNumber1] = useState(0);
const[number2, setNumber2] = useState(0);
const[count, setCount] = useState(0);

//Example 1
// const sum= ()=>{
//     console.log("calculating sum......!");
//     return number1 + number2;
// }
// Example 2
 const sum = useMemo(()=>{
    console.log("Calculatin sum,...!");
    return number1 + number2;
 },[number1,number2]);
  return (
    <div>
    <h1>useMemo in REact</h1>
      {/* Example 1 */}

    <div>
      <input
      type='number'
      value={number1}
      onChange={(e)=>setNumber1(Number(e.target.value))}
      />  
      <input
      type='number'
      value={number2}
      onChange={(e)=>setNumber2(Number(e.target.value))}
      />  
      {/* <p>Sum:{sum()}</p> */}
      {/* Example1 */}
       {/* now Example 2 */}
     <p>Sum:{sum}</p>
      <h2>Count Number:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click++</button>
    </div>
    </div>
  );
}

// Here everytime the function will re render whatever button we press or whatever calculation we do.
// so we have to use use memo hook



export default Memohook