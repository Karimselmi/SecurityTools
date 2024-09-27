import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to Security Tools
      </h1>
      <div className="space-y-4">
        <Link
          to="/password-strength"
          className="block bg-white text-center text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 transition-colors"
        >
          Password Strength Checker
        </Link>
        <Link
          to="/vulnerability-testing"
          className="block bg-white text-center text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-100 transition-colors"
        >
          Vulnerability Testing
        </Link>
      </div>
    </div>
  );
};

export default Home;
