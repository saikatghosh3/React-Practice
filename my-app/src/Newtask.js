import React from 'react';
import './Newtask.css';
import Style from "./style.module.css";

const Newtask = () => {

const headline = {
 color:"#fff",
 backgroundColor:"blue"


    }
  return (
    <div>
        {/* Example 1 */}
      
      <h1 style={{color:"#fff",backgroundColor:"green"}}>Inline Method</h1>
      {/* Example 2 */} 
     <h1 className='primary'>Normal Method</h1>
     {/* Example 3 */}
     <h1 style={headline}>Css in js Method</h1>
     {/* //Example 4 module 3 */}
     {/* This method allow us to prevent class name. No one can see the class name. */}
     <h1 className={Style.title}>This is the module version</h1>
    
    </div>
  )
}

export default Newtask