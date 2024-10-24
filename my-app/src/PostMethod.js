import React,{useState} from 'react'

const PostMethod = () => {
  // useState
const [FormData, setFormData] =useState({
    title:"",
    body:"",
});
const handleChange = (e)=>{
  const {name, value}= e.target;
  setFormData({
    ...FormData,
    [name]:value,
  });
};
const handleSubmit = (e)=>{
  e.preventDefault();

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Create the request object
const requestOptions = {
  method:"POST",
  Headers:{
    "Content-Type" :"application/json",
  },
  body:JSON.stringify(FormData)
};
// send the post request
fetch(apiUrl, requestOptions)
.then((respeonse)=>respeonse.json())
.then((data)=>{
  // Handle the response data
  console.log("Response Data:", data);
})
.catch((error) => {
  console.log("Error:", error);
});
};

  return (
    <>
      
        <form onSubmit={handleSubmit }>
            <div>
            <label>Title:</label>
              <input type='text' name='title' value={FormData.title} onChange={handleChange}></input>
               </div>       
            <div>
            <label>Body:</label>
            <textarea name='body' value={FormData.body} onChange={handleChange}/>
               </div>  
               <button type='submit'>Submit</button>     
         </form>

    
    </>
  )
  }

export default PostMethod