import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

  const[posts,setPosts] = useState([])


  useEffect(()=>{
    axios.get('http://localhost:3001/getposts')
    .then(posts => setPosts(posts.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div>
      <div>
       {
         posts.map( posts => (
          <Link to={`/post/${posts._id}`}>
          <div className='w-[65%] h-[300px] flex flex-row flex-wrap justify-center items-center m-9 mr-10 border-2 border-black mb-4'>
            <img src={`http://localhost:3001/Images/${posts.file}`} alt="" className='w-40 h-40 md:w-60 md:h-60' />
            <div className='flex flex-col flex-wrap'>
            <h2 className='font-bold text-lg md:text-xl'>{posts.title}</h2>
            <h2 className='font-bold text-lg md:text-xl'>{posts.desc}</h2>
            </div>
          </div>
          </Link>
         ))
       }
      </div>
    </div>
  )
}

export default Home
