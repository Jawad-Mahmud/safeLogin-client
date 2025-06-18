import React from 'react';
import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Unauthorized Access</h1>
      <p className="text-gray-700 mb-6">You don’t have permission to view this page.</p>
      
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
};
