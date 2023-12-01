import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Logo from "../assets/purple.png";
const Signin = ({isAuth,updateAuth}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [dob, setdob] = useState('')
  const [phone, setphone] = useState()
  const navigate = useNavigate();


  const handleLogin = () => {
   
   if(Cpassword===password){
    handleLoginReq(email, password,firstName,lastName,dob,phone);
   }else{
    alert("Passwords Don't Match");
   }
  };

  
  async function handleLoginReq(email, password,firstName,lastName,dob,phone) {
    // Define the URL of your Node.js backend API endpoint
    const apiUrl = `https://money-magnet.onrender.com/auth/register`;
  
    // Create a request object with the necessary headers and the POST method
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer'
      },
      body: JSON.stringify({ email, password,firstName,lastName,dob,phone }),
    };
  
    // Send the login request
    await fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then((data) => {
        //save to local storage
        alert('Userr successfully Created', data);
        localStorage.setItem("token",data.token);
        updateAuth(true);
        navigate('/', { replace: true });
       
      })
      .catch((error) => {
        //show appropriate error
        console.error('Error:', error);
        alert("Not able to Create User")
        // navigate('/signin', { replace: true });
        
      });
  }
  
  return (
    <section className="relative z-2">
        <div className="md:grid md:grid-cols-2 grid-cols-1">
          <div className="collapse bg-indigo-600 md:visible">
          
          </div>
          <div className="min-h-screen   flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
           
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
            </div>
            <div className="flex justify-center">
              {" "}
              <span className="relative px-1 w-24">
                <div className="absolute inset-x-0 top-1 bottom-0 h-3 transform -skew-x-[30deg] bg-indigo-600" />
              </span>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-4 ">
              <div className="bg-violet-200 py-8 px-4 shadow sm:rounded-lg sm:px-10  relative z-4">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

    
                  <div>
                    <div className="mt-1">
                      <input
                        id="fname"
                        name="firstName"
                        type="text"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your First Name"
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="lname"
                        name="lastName"
                        type="text"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your Last Name"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="number"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your Phone"
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div><label htmlFor="Dob" className='text-sm mb-1'>Enter your Date of Birth</label>
                    <div className="mt-1">
                      
                      <input
                        id="Dob"
                        name="Dob"
                        type="date"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your Date of Birth"
                        onChange={(e) => setdob(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="cpassword"
                        name="cpassword"
                        type="password"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                        placeholder="Confirm your password"
                        onChange={(e) => setCPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-900 "
                      >
                        Already a User? <Link to="/login" replace={true} className='text-indigo-600'>Login</Link> 
                      </a>
                    </div>
                    </div>

                    
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      onClick={(e)=>{
                        e.preventDefault();
                        handleLogin()}}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span
                        className="px-2 
                       text-gray-500"
                      >
                        Or Sign-in with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <a
                        href="#"
                        className="w flex items-center justify-center p-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <img
                          className="h-5 w-5"
                          src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                          alt=""
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="w- flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <img
                          className="h-6 w-6"
                          src="https://www.svgrepo.com/show/506498/google.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Signin