
import React,{memo} from 'react';

function Memochildren() {
    console.log("Child Component Rendered!!");
  return (
    <div>Memochildren</div>
  );
}

export default memo (Memochildren);

// This component will not rendered everytime it will be rendered only once 