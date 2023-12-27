import React from 'react';

const AnotherPage = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-black mb-8 py-4 px-1">Today</h1>
      
      <div className="w-full max-w-md text-center text-gray-600 bg-white p-4 rounded-md shadow-md mb-4">
        <p className="text-md font-semibold mb-1">SECTION-A</p>
        <p className="text-sm">Period 2nd, 11:00 AM, 45 Min</p>
      </div>
      
      <div className="flex justify-between w-full max-w-3xl mb-6">
        <div className="w-360 h-816 bg-white rounded-md shadow-md p-4 mr-4">
          <h2 className="text-xl font-semibold mb-4">Materials</h2>
          {/* Add content related to materials */}
          <p>Content for Materials</p>
        </div>
        <div className="w-360 h-816 bg-white rounded-md shadow-md p-4 ">
          <h2 className="text-xl font-semibold mb-4">Attendance</h2>
          {/* Add content related to attendance */}
          <p>Content for Attendance</p>
        </div>
      </div>
      <div className="w-full max-w-md text-center text-gray-600 bg-white p-4 rounded-md shadow-md mb-4">
        <p className="text-md font-semibold mb-1">Class Management</p>
        
      </div>


<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Examination</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Classroom</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Profile</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
};

export default AnotherPage;