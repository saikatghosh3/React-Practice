import React from 'react'
import Propschildren from './Propschildren'

const Propsexample = () => {
    const data = "Saikat Ghosh";
  return (
    
    <div>
        <h2>Lifting State up In React.</h2>
        <Propschildren  data = {data}/>
    </div>
  )
}

export default Propsexample