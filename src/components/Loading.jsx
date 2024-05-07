import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-lg">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default Loading;
