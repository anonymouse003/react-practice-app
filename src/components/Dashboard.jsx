import React from 'react';

const Dashboard = () => {
  const assignments = [
    { id: 1, subject: 'Mathematics', task: 'Complete Exercise 5', progress: 40 },
    { id: 2, subject: 'Science', task: 'Write a report on Photosynthesis', progress: 70 },
    { id: 3, subject: 'History', task: 'Read Chapter 7 and summarize', progress: 20 },
    // Add more assignments as needed
  ];

  const quizzes = [
    { id: 1, subject: 'Mathematics', quizName: 'Algebra Quiz', attempts: 2 },
    { id: 2, subject: 'Science', quizName: 'Biology Quiz', attempts: 1 },
    { id: 3, subject: 'History', quizName: 'World War I Quiz', attempts: 0 },
    // Add more quizzes as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6"> 
        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>

        {/* Overview Container */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          {/* Add content related to overview here */}
          <p>Placeholder for overview content</p>
        </div>

        {/* Assignments Container */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">
          <div class="float-right">
            <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none justify-right">
              + Add New
            </button>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Assignments</h2>

          {assignments.map((assignment, index) => (
            <div key={assignment.id} className={`mb-4 ${index !== 0 ? 'mt-4' : ''}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{assignment.subject}</h3>
                  <p>{assignment.task}</p>
                </div>
                <div className="flex items-center">
                  {/* Style 'Choose File' button similarly */}
                  <label className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none cursor-pointer">
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <div className="w-40 bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none h-6 overflow-hidden ml-4">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: `${assignment.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Line break between assignments */}
              {index !== assignments.length - 1 && <hr className="my-4 border-t border-gray-300" />}
            </div>
          ))}
        </div>

        {/* Quizzes Container */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        
          <h2 className="text-3xl font-semibold mb-4 flex justify-between items-center">
            Quizzes</h2>
            
          

          {/* Render each quiz */}
          {quizzes.map((quiz, index) => (
            <div key={quiz.id} className={`mb-4 ${index !== 0 ? 'mt-4' : ''}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{quiz.subject}</h3>
                  <p>{quiz.quizName}</p>
                </div>
                {/* Display 'Attempt Quiz' button */}
                <div class="float-right">
            <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none justify-right">
              Attempt Quiz
            </button>
          </div>
              </div>
              {/* Line break between quizzes */}
              {index !== quizzes.length - 1 && <hr className="my-4 border-t border-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
