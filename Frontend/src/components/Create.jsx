import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Create = () => {
    const {id} = useParams();
    const [post,setPost] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/getpostbyid/'+id)
        .then(result => setPost(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deletepost/${id}`)
        .then(result => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <div className='w-[65%] h-[300px] flex flex-row flex-wrap justify-center items-center m-9 mr-10 border-2 border-black mb-4'>
        <img src={`http://localhost:3001/Images/${post.file}`} alt="" className='w-40 h-40 md:w-60 md:h-60' />
        <div className='flex-col'>
        <h2 className='font-bold text-lg md:text-xl'>{post.title}</h2>
        <h2 className='font-bold text-lg md:text-xl'>{post.desc}</h2>
        </div>
        </div>
        <div className='flex flex-row ml-8 gap-2'>
        <Link to={`/editpost/${id}`}>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl active:scale-95 focus:ring-4 focus:ring-blue-300">
        Edit
      </button>
        </Link>
      <button onClick={ e => handleDelete(post._id)} className="px-6 py-3 text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl active:scale-95 focus:ring-4 focus:ring-blue-300">
      Delete
    </button>
        </div>
    </div>
  )
}

export default Create