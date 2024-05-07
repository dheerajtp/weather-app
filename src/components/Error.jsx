import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-800 mb-4">
          An unexpected error occurred.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Error;
