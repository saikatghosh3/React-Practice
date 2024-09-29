import React from 'react'
import Table from 'react-bootstrap/Table';

const TableBnormal = () => {

    
  return (
    <div className='table' >
        <h1>This is a normal table</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@mofixa</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob</td>
          <td>Marlo</td>
          <td>@fanton</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default TableBnormal