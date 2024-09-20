import React, {useEffect, useState } from 'react'


 const Useeffect2 = () => {

    const [count, setCount]= useState(0);
    const [total, setTotal]= useState(50);

     useEffect(()=>{
        console.log("After Renderint total");
    
    },[total]); 

     useEffect(()=>{
        console.log("After Rendering Count");
    
    },[count]); 
    //    we are using condition in this case only total we run

  
  return (
   
    
    <div>
      <UserTotal/>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count +1)}>Update Count</button>
      <h1>Total:{total}</h1>
      <button onClick={()=>setTotal(total +1)}>Update Total</button>
    </div>
  )
}

export default Useeffect2