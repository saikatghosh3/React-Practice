import React, {useState, useRef, useLayoutEffect} from 'react'

const Uselayout = () => {
    const [width, setWidth]= useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(()=>{
        if(elementRef.current){
            setWidth(elementRef.current.getBoundingClientRect().width);
        }
    },[]);
    // Empty dependency means it will run only one time after render
  return (

    <div>
        <h2>Width Measurement Example</h2>
        <div
        ref={elementRef}
            Style={{
                width:"500px",
                background:"lightblue",
                margin:"auto",
            }}>Element Whose Width Is Measured.
        </div>
        <p>Width:{width}</p>
    </div>
  )
}

export default Uselayout