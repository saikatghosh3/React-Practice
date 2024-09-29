import React from 'react'
import ButtonD from './ButtonD';
import ReusableList from './ReusableList';

const Reuseable = () => {

    const handleButtonClick = ()=>{
     console.log("Button was clicked!")
    }
    const countries = ["USA","Canada", "India","UK","Australia","srilanka","Nepal"];
  return (


    <div><h1>Reuseable components </h1>
        {/* Example 1  dynamic button*/}
      <ButtonD text="Click Me" onClick={handleButtonClick}/>
      <ButtonD text="Submit" onClick={handleButtonClick}/>
      
        {/* Example 2 for reusable list dynamic list */}

        <ReusableList items={countries}/>
    </div>
  )
}

export default Reuseable