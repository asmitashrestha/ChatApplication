import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye } from 'react-icons/ai';

const Home = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setDisplay(!display);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password: password,
      })
    })
      .then(res => {
        if (res.ok) {
          toast.success("Login successful");
          navigate('/');
        } else {
          toast.error("Invalid Credentials");
        }
      })
      .catch(err => {
        console.error("Error occurred during login");
        toast.error("Something went wrong - mostly when there is an interruption in the internet");
      });
  }

  const handleGuestUserClick = () => {
    setEmail("guest123@gmail.com");
    setPassword("123asd");
  }

  return (
    <>
      <div className='containers h-screen'>
        <div className="title">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Login
                </button>
              </div>
            </form>
          </div>

          <Link to='/signup' className='sign bg-blue-500 py-2'>Signup</Link>

          <button className='sign bg-red-600 py-2' onClick={handleGuestUserClick}>Guest User Credentials</button>
        </div>
      </div>
    </>
  )
}

export default Home;

