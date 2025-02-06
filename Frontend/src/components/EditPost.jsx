import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const [title,setTitle] = useState("");
    const [desc,setDescrip] = useState("");
    const {id} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();        
       
    axios.put('http://localhost:3001/editpost/'+id,{title,desc})
    .then(res => {
      console.log(res);
      if(res.data === "Success"){
        window.location.href = '/'
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/getpostbyid/'+id)
    .then(result => {
        setTitle(result.data.title)
        setDescrip(result.data.desc)
  })
    .catch(err => console.log(err))
},[])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
     <form onSubmit={handleSubmit}>
     <h1 className="text-2xl font-bold mb-4 text-center">Edit Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Enter Description"
        name='desc'
        id='desc'
        cols="30"
        rows="10"
        value={desc}
        onChange={e => setDescrip(e.target.value)}
        className="border rounded-lg mb-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button type="submit"  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
        Update
      </button>
     </form>
    </div>
  </div>
);
}

export default EditPost;