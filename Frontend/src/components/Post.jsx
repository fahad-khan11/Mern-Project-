import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [title,setTitle] = useState("");
    const [desc,setDescrip] = useState("");
    const [file,setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file);
        
        const formData = new FormData();
        formData.append('title',title);
        formData.append('desc',desc);
        formData.append('file',file)
        axios.post('http://localhost:3001/create',formData)
    .then(res => {
      console.log(res);
      if(res.data === "Success"){
        window.location.href = '/'
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
     <form onSubmit={handleSubmit}>
     <h1 className="text-2xl font-bold mb-4 text-center">Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Enter Description"
        name='desc'
        id='desc'
        cols="30"
        rows="10"
        onChange={e => setDescrip(e.target.value)}
        className="border rounded-lg mb-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <input
        type="file"
        name='file'
        id='file'
        onChange={e => setFile(e.target.files[0])}
        className="w-full p-2 border rounded-lg mb-3"
      />
      <button type="submit"  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
        Post
      </button>
     </form>
    </div>
  </div>
);
}


export default Post