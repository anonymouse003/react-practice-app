import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! Page not found</p>
        <p className="text-gray-500">The page you are looking for might have been removed or is temporarily unavailable.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
