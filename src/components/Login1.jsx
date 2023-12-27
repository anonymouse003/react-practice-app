import React from 'react';

const Login1 = () => {
  return (
    <div className="flex h-screen  bg-gray-100">
      {/* Left section */}
      <div className="w-1/4 bg-blue-500">
        <div className="flex flex-col justify-center h-full p-6">
          <p className="text-white text-center text-sm mb-4">Just a few steps away to complete</p>
          <p className="text-white text-center text-sm">"Unlocking the potential of every learner"</p>
        </div>
      </div>

      {/* Right section */}
      <div className="w-3/4 flex flex-col justify-start ml-10 mr-10">
        {/* Sheshya and Login container */}
        <div className="flex justify-between items-center w-full">
          {/* Sheshya text */}
          <p className="text-2xl">Sheshya</p>
          
          {/* Login button */}
          <button className="bg-orange-500 mt-2 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
            Login
          </button>
        </div>
        <div className="flex justify-start mt-20">
          <p className="text-center text-4xl">Continue as,</p>
        </div>
        <div className="flex justify-between w-full mt-10">
          {/* Administration */}
          <div className="w-1/3 bg-white border rounded-lg p-4 flex flex-col text-lg" style={{ height: '130px' }}>
            <div className="flex justify-start">
            <input type="checkbox" id="administration" />
            </div>
            <div className='mt-10 overflow-hidden'>
            <label htmlFor="administration" className="">Administration</label>
            </div>
          </div>
          
          {/* Teacher */}
          <div className="w-1/3 bg-white border rounded-lg p-4 flex flex-col ml-4 text-lg" style={{ height: '130px' }}>
            <div className="flex justify-start">
            <input type="checkbox" id="teacher" />
            </div>
            <label htmlFor="teacher" className="mt-10 overflow-hidden">Teacher</label>
          </div>
          
          {/* Student */}
          <div className="w-1/3 bg-white border rounded-lg p-4 flex flex-col ml-4 text-lg" style={{ height: '130px' }}>
          <div className="flex justify-start">
            <input type="checkbox" id="student" />
            </div>
            <label htmlFor="student" className="mt-10 overflow-hidden">Student</label>
          </div>
        </div>
        <div className="mt-10 justify-Left">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
            Continue
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login1;