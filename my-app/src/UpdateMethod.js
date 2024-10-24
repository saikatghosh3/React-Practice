import React,{useState, useEffect} from 'react'

function UpdateMethod() {
    const [psotData, setPostData]= useState({
        id:1,
        title:"",
        body:"",
    });
    const [messeage, setMessage]= useState(" ");
    const [loading, setLodaing]= useState(false);

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setPostData({
        
      })
    }
  return (

    <>
    {loading && <p>Loading...</p>}
    {messeage &&  <p>{messeage}</p>}
    <form>
    <div>
      <label>Title:</label>
      <input type='text' name= "title" value={psotData.title} onChange={handleChange}/>
    </div>
    <div>
      <label>Body:</label>
      <textarea name='body' value={psotData.body} onChange={handleChange} />
    </div>
    <button type='submit'>Update Post</button>
    </form>
    </>
  )
}

export default UpdateMethod