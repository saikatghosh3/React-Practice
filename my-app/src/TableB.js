import React from 'react'
import Table from 'react-bootstrap/Table';

const TableB = () => {

    const TableData=[
        {
          "id": 1,
          "name": "Alice",
          "age": 30,
          "location": "New York"
        },
        {
          "id": 2,
          "name": "Bob",
          "age": 25,
          "location": "Los Angeles"
        },
        {
          "id": 3,
          "name": "Charlie",
          "age": 35,
          "location": "Chicago"
        },
        {
          "id": 4,
          "name": "David",
          "age": 40,
          "location": "Houston"
        },
        {
          "id": 5,
          "name": "Eve",
          "age": 28,
          "location": "Phoenix"
        },
        {
          "id": 6,
          "name": "Frank",
          "age": 32,
          "location": "San Diego"
        }
      ]
  return (
    <div className='Table'>
   <h1>Bootstrap with table with dynamic value</h1>
     <div>
        <Table striped bordered hover size='sm' variant = 'dark' responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {TableData.map((data)=>(
                  // প্রতিটি পুনরাবৃত্তির জন্য, লুপ ভেরিয়েবল data বর্তমান অবজেক্টের মান গ্রহণ করে।
                     <tr key={data.id}>
                         {/* we have to mantion the key otherwise it will show error in the console */}
                        
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.location}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
     </div>
    </div>
  )
}

export default TableB