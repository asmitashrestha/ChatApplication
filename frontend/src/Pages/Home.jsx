import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillEye} from 'react-icons/ai';


const Home = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    
    e.preventDefault()
    console.log('api called')

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // username: "mor_2314",
        // password: "83r5^_"
        "username": e.target.name.value,
        "password": e.target.password.value, 

      })
    })
      .then(res =>{
        if(res.ok){
          toast.success("Login sucessful")
          navigate('/')
        }else{
          toast.error("Invalid Credentials")
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error("Error ocurred during login")
        toast.error("something went wrong -> mostly when interruption in internet")
      })
  }

  return (
    <>
      <div className='containers h-screen'>
        <div className="title">
          <p>Chit-Chat</p>
          </div>
        <div className="container flex  flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-800  hover:text-blue-800 font-mono">Login</h2>
          </div>

          {
            error
            &&
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4'>
              {error}
            </div>
          }


          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Email Address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
              
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Password</label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <input id="password" name="password"  type="password" autoComplete="current-password" required className="block w-10/12 p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                  <button className="block hover:bg-teal-100 w-2/12 text-center justify-center bg-white p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 justify-center text-center"><span className='eye'><AiFillEye/></span></button>
                </div>
              </div>

              <div>
                <Link to='/'  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</Link>
              </div>
            </form>


          </div>
          <Link to='/signup' className='sign bg-blue-500 py-2'>Signup</Link>
          <Link to='/guestuser' className='sign bg-red-600 py-2'>Guest User Credentials</Link>
        </div>


      </div>
    </>
  )
}

export default Home
