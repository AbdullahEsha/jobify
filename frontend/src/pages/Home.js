import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="font-bold text-2xl mb-4 shadow-md rounded-lg p-5 border">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="text-2xl mt-4">Welcome to the Home page!</p>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <a href="/login" className="text-blue-500 hover:underline text-base">
            Login
          </a>
          <a href="/signup" className="text-blue-500 hover:underline text-base">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};
