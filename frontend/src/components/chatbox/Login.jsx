import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
  
    const handleClick = () => setDisplay(!display);
  
  
    const submitHandler = async (e) =>{
      e.preventDefault()
      setLoading(true)
      if(!email || !password ){
        toast.warning("Please Fill all the fileds!")
        setLoading(false)
        return
      }
  
      try {
        // const response = await fetch("http://localhost:8000/user/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify({ email, password }),
        // });
      const response = await fetch("http://localhost:8000/user/login", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data from server:", errorData);
          throw new Error(errorData.message);
        }
      
        const data = await response.json();
        toast.success("Login Successful");
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/chats");
       } 
      // } catch (error) {
      //   toast.error(error.response.data.message);
      //   console.log(error.response.data.message);
      //   setLoading(false);
      // }
   catch (error) {
      if (error.message) {
        // Display the error message if available
        toast.error(error.message);
        console.log(error.message);
      } else {
        // If no specific error message is available, log the entire error object
        toast.error('An error occurred');
        console.error(error);
      }
      setLoading(false);
    }
    }
  
  
    const handleGuestUserClick = () => {
      setEmail("guest123@gmail.com");
      setPassword("123asd");
    }
  
    return (
      <>
        <div className='containers h-screen'>
          <div className="titler">
            <p>Chit-Chat</p>
          </div>
          <div className="container flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-800 hover:text-blue-800 font-mono">Login</h2>
            </div>
  
            {
              error
              &&
              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4'>
                {error}
              </div>
            }
  
            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Email Address</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder='Enter Your Mail'
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Password</label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div className="mt-1 flex">
                    <input
                      id="password"
                      name="password"
                      type={display ? 'text' : "password"}
                      placeholder='Enter Your Password'
                      required
                      className="pl-2 block w-10/12 p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
  
                    <button
                      className="block hover:bg-teal-100 w-2/12 text-center justify-center bg-white p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 justify-center text-center"
                      onClick={handleClick}>
                      <span className='eye'> {display ? "hide" : "display"} </span>
                    </button>
                  </div>
                </div>
  
                <div>
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={submitHandler}
                  disabled={loading}>
                    Login
                  </button>
                </div>
              </form>
            </div>
  
            <Link to='/signupchat' className='sign bg-blue-500 py-2'>Signup</Link>
  
            <button className='sign bg-red-600 py-2' onClick={handleGuestUserClick}>Guest User Credentials</button>
          </div>
        </div>
      </>
    )
}

export default Login
