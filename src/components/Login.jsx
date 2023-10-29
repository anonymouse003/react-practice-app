import React ,{ useState} from 'react'
import "./Login.css"

function Login() {
  const[showPassword ,setShowPassword]= useState(false);
  const[incorrectLogin ,setIncorrectLogin]= useState(false);

  const handleLogin=() =>{
    setIncorrectLogin(true);
  }
  return (
    <div className='h-screen' id="login-bg">
        <div className="flex justify-center items-center h-full">
      <form className="max-w-[400px] w-full mx-auto p-8">
        <div className="flex justify-center text-5xl text-white m-7 font-semibold">sheshya</div>
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>
        <button
          className="text-white text-sm text-right self-end hover:text-gray-800"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <p className={`text-white text-center ${incorrectLogin ? 'block' : 'hidden'}`}>Incorrect username or password</p>
        <p className="text-white text-right">Forgot Password</p>
        <button
          className="rounded-full w-full py-2 mt-8 text-white  border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className='p-6'>
        <div className="flex justify-center mt-4">
          <p className="text-white">New to Sheshya?</p>
        </div>
        <button
         className="rounded-full w-full py-2 mt-2 text-white border border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out font-semibold">
        
          Tap to Register
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;
