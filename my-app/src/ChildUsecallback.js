import React, {memo} from 'react'

const ChildUsecallback = ({increment}) => {
  console.log("Child Rendered!!")

  return (
    <div>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default memo (ChildUsecallback);