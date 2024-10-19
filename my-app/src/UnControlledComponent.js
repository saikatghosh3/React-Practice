import React,{useRef} from 'react'

function UnControlledComponent() {
//Example 1
let inputRef = useRef(null);
let inputRef2 = useRef(null);

const submitForm = (e)=>{
    e.preventDefault();
    console.log("First input Value:",inputRef.current.value);
    console.log("Second input Value:",inputRef2.current.value);
}
  return (
    <div>
     <h1>UnControlledComponent</h1>
     <form onSubmit = {submitForm}>
        <input type='text' ref={inputRef}/>
        <input type='text' ref={inputRef2}/>
        <button>Submit</button>
        
     </form>
    </div>
  )
}

export default UnControlledComponent