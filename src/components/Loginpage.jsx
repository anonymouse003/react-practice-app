import React from 'react';

const LoginPage = () => {
  return (
    <div className="sm:flex sm:flex-col ...">
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="w-full h-80 bg-blue-500 flex flex-col justify-center items-center">
        {/*<h1 className="text-white text-4xl font-bold mb-8">Your Title Here</h1>*/}
        <div className="w-40">        
          <svg className="text-white text-4xl w-full h-full font-bold mb-8" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 500 500">
          <path d="M170.09,250.93c3.66-5.45,9.37-12.94,17.68-20.4,11.24-10.1,28.57-29.31,68.92-29.47,38.24-.15,76.47-.3,114.71-.45-.52-9.21-3.6-45.1-32.64-71.64-18.37-16.78-38.24-21.72-48.06-24.03-10.67-2.51-44.89-10.01-80.25,9.07-7.71,4.16-41.41,22.35-51.69,63.02-9.48,37.5,7.63,67.69,11.33,73.9Z" style={{fill: "rgb(255, 255, 255)"}}></path>
          <path d="M262.71,202.25c-.11,32.61-.23,65.23-.34,97.84-35.93,.11-71.86,.23-107.8,.34,.18,10.02,2.02,33.08,17.68,55.75,18.54,26.85,44.63,36.06,54.18,39.27,7,2.36,26.87,8.28,52.37,4.74,10.45-1.45,39.87-5.98,64.16-30.92,5.71-5.87,23.37-24.53,27.66-54.85,.65-4.58,4.52-35.22-13.83-64.55-29.72-47.52-90.28-47.68-94.08-47.62Z" style={{fill: "rgb(255, 255, 255)"}}></path>
        </svg>
        </div>

        
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold hover:bg-blue-100">
            Login
          </button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold hover:bg-blue-100">
            Sign Up
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-black mt-3 text-lg">
        <p>Continue as:</p>

        {/* Three containers for Administration, Parent, and Teacher */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="w-full max-w-xs flex items-center bg-white rounded-md p-2 shadow-md transition duration-300 hover:shadow-lg">
            <input type="checkbox" id="administration" name="role" value="administration" />
            <label htmlFor="administration" className="ml-2">Administration</label>
          </div>
          <div className="w-full max-w-xs flex items-center bg-white rounded-md p-2 shadow-md transition duration-300 hover:shadow-lg">
            <input type="checkbox" id="parent" name="role" value="parent" />
            <label htmlFor="parent" className="ml-2">Parent</label>
          </div>
          <div className="w-full max-w-xs flex items-center bg-white rounded-md p-2 shadow-md transition duration-300 hover:shadow-lg">
            <input type="checkbox" id="teacher" name="role" value="teacher" />
            <label htmlFor="teacher" className="ml-2">Teacher</label>
          </div>
        </div>

        {/* Div with the Continue button */}
        <div className="mt-4 py-5">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600">
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
