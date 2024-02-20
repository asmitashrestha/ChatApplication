import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillEye} from 'react-icons/ai';

const Signup = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmpassword,setConfirmpassword] = useState()
  const [img,setImg] = useState()
  const [error, setError] = useState("")
  const [display,setDisplay] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = ()=> setDisplay(!display);

  const postDetails = (imgs) => {
    setLoading(true);
    if (imgs === undefined) {
      toast.warning("Please select an image!");
      return;
    }
  
    if (imgs.type === 'image/jpeg' || imgs.type === 'image/png') {
      const data = new FormData();
      data.append("file", imgs);
      data.append("upload_preset", "chatapp"); 
      data.append("cloud_name", "dkibeslb7");
  
      fetch("https://api.cloudinary.com/v1_1/dkibeslb7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Image URL:", data.url);
          setImg(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.warning("Please select an image!");
    }
  };
  
  const submitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)
    if(!name || !email || !password || !confirmpassword){
      toast.warning("Please Fill all the fileds!")
      setLoading(false)
      return
    }
    if(password !== confirmpassword){
      toast.warning("Passwords do not match")
      return
    }

    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password, img }),
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    
      const data = await response.json();
      toast.success("Registration Successful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    
  }


  return (
    <>
      <div className='containers h-screen'>
        <div className="titles">
          <p>Chit-Chat</p>
          </div>
        <div className="contain h-5/6 flex  flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-800  hover:text-blue-800 font-mono">SignUp</h2>
          </div>

          {
            error
            &&
            <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4'>
              {error}
            </div>
          }


          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Name</label>
                <div className="mt-1">
                  <input id="name" placeholder='Enter Your Name' name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                  onChange={(e)=>{setName(e.target.value)}} />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Email</label>
                <div className="mt-1">
                  <input id="email" placeholder='Enter Your Email' name="email" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" 
                  onChange={(e)=>{setEmail(e.target.value)}}/>
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
                  <input id="password" name="password" type={display? 'text': "password"} autoComplete="current-password" required className="pl-2 block w-10/12 p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" 
                  onChange={(e)=>{setPassword(e.target.value)}}/>
                 
                  <button className="block hover:bg-teal-100 w-2/12 text-center justify-center bg-white p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6  "
                  onClick={handleClick}>
                    <span className='eye'> { display ? "hide" :"display"} </span>
                    
                  </button>
                
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Confirm Password</label>
                  
                </div>
                <div className="mt-1 flex">
                  <input id="confirmPassword" name="password" type={display? 'text': "password"} autoComplete="current-password" required className="pl-2 block w-10/12 p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" 
                  onChange={(e)=>{setConfirmpassword(e.target.value)}}/>
                 
                  <button className="block hover:bg-teal-100 w-2/12  bg-white p24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 justify-center text-center"
                  onClick={handleClick}>
                    <span className='eye'> { display ? "hide" :"display"} </span>
                    
                  </button>
                
                </div>
              </div>

              <div>
                <label htmlFor="image" className="mt-1 block text-md font-medium leading-6 text-gray-700 font-serif hover:text-gray-900">Upload Your Picture</label>
                <div className="mt-1">
                  <input id="image" accept='image/*' placeholder='Upload image' name="image" type="file" autoComplete="image" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" 
                  onChange={(e)=>{postDetails(e.target.files[0])}}/>
                </div>
              </div>

              <div className='flex relative bottom-5'>
                <button type="submit" className="flex w-6/12 mr-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={submitHandler} disabled ={loading}>Signup</button>
                <Link to='/loginchat' className='w-6/12 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>Login</Link>
               </div>
            </form>


          </div>
         
        </div>


      </div>
    </>
  )
}

export default Signup
