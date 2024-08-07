import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-r-transparent rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

export default Loading;