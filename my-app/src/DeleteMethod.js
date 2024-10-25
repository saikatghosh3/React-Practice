import React,{useState, useEffect} from 'react'


const DeleteMethod = () => {
// state to store mock data

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

// Fetch mock data form json Placeholder api
const fetchData = async()=>{
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if(!response.ok){
            throw new Error("network respone was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);

    }
    catch(error){
        console.log("Error fetching data:", error)
    }
};
// Initial data fetch on component mount
useEffect(()=>{
    fetchData();
},[]);
// Delete data based on its Id
const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"DELETE",
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(()=>{
        // Remove the deleted item from the array
        setData(data.filter((item)=> item.id !==id));
    })
    .catch((error)=>console.error("Error deleting data:", error));
};
  return (
    <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((item)=>(
                    <tr key={item.id}> 
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </td>
                    
                     </tr>
                   ))

                   }
                </tbody>
            </table>
        )}
    </div>
  );
};


export default DeleteMethod