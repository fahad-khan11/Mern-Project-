import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  // Separate state for name, email, and password
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleNameChange = (e) => setuserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{username,email,password})
    .then(res => navigate('/login'))
    .catch(err => console.log(err))
  };

  return (
    <div className="min-h-[80%] flex items-center justify-center bg-gray-100 pt-6 pb-24"> {/* Adjusted padding to position below navbar */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"> {/* Adjusted width */}
        <h2 className="text-2xl font-bold mb-0.5 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="mb-0.5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={handleNameChange}
            />
          </div>
          
          {/* Email input */}
          <div className="mb-0.5">
            <label className="block text-gray-700 text-sm font-bold mb-0.5" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Password input */}
          <div className="mb-0.5">
            <label className="block text-gray-700 text-sm font-bold mb-0.5" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Register button */}
          <div className="mb-0.5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Signup
            </button>
          </div>
          
          {/* Already have an account link */}
          <div className="mb-0.5 text-center">
            <a
              className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Already have an account?
            </a>
          </div>

          {/* Login button with full width */}
          <div>
            <Link to="/login">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
