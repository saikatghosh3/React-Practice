import React,{useState, useEffect} from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function GetMethod() {
    const [data, setData]=useState([]);
    const [loading, setLodaing] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            // fake api will be available in the website  https://jsonplaceholder.typicode.com/ 

            if(!response.ok){
                throw new Error("Network Response was not ok");
            }
            return response.json();
        })
        .then((data)=>{
            setData(data);
            setLodaing(false);
            // in this way we are saving data whenever it is coming
             console.log(data);
        })
        .catch((error)=>console.log("Error", error));
    },[]);


  return (
    <div>
        {
            loading ? (
                <p>Loadaing...</p>
            ) : (
                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((list, index)=>(
                            <tr key = {index}>
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                            <td>{list.body}</td>
                        </tr>
                        ))
                    }
                   
                </tbody>
    
            </table>
            )
            
        }
        
    </div>
  )
}

export default GetMethod