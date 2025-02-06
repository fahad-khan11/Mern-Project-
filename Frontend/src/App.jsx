import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import axios from 'axios';
import {createContext} from 'react';
import Post from './components/Post';
import Create from './components/Create';
import EditPost from './components/EditPost';

export const userContext = createContext(); 
const App = () => {
  const [user, setUser] = useState({})
  useEffect(()=>{
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3001/')
    .then(user=> setUser(user.data))
    .catch(err => console.log(err)
    )
  },[])

  return (
    <div>
      <userContext.Provider value={user}>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Post/>}/>
        <Route path='/post/:id' element={<Create/>}/>
        <Route path='/editpost/:id' element={<EditPost/>}/>

      </Routes>
      </userContext.Provider>
    </div>
  )
}

export default App
