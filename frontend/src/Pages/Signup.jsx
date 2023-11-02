import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <div className="contain h-5/6 flex  flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-800  hover:text-blue-800 font-mono">SignUp</h2>
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
                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Name</label>
                <div className="mt-2">
                  <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Email</label>
                <div className="mt-2">
                  <input id="email" name="email" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Password</label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Signup</button>
              </div>
            </form>


          </div>
          <Link to='/' className='sign py-2'>Login</Link>
        </div>


      </div>
    </>
  )
}

export default Home
