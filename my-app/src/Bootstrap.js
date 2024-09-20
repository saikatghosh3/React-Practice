import React from "react";
// For importing one component
// import Button from 'react-bootstrap/Button';
// for imorting multiple element
import {Button, Alert} from 'react-bootstrap';


const Bootstrap = () => {
  return (
    <div>
      <h1>This is a heading</h1>
      <Button variant="primary">Primary</Button>
      
        <Alert variant="success">This is a  alert—check it out!</Alert>
    
        <Alert variant="danger">This is a  alert—check it out!</Alert>
    
    </div>
  )
}

export default Bootstrap