import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  bg-[linear-gradient(340deg,_rgba(6,182,212,0.7)_23%,_rgba(139,92,246,0.7)_64%,_rgba(236,72,153,0.7))]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 my-11">
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create Your MovieVerse Account</h2>
          
          {/* Form */}
          <form>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mt-1 border rounded-md"
              />
            </div>
  
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 mt-1 border rounded-md"
              />
            </div>
  
            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Photo URL</label>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="w-full p-3 mt-1 border rounded-md"
              />
            </div>
  
            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter a secure password"
                className="w-full p-3 mt-1 border rounded-md"
              />
            </div>
  
            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>
  
          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          {/* Google Login */}
          <button className="w-full py-3 border flex items-center justify-center rounded-lg hover:bg-gray-100 transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-5 w-5 mr-2" />
            Continue with Google
          </button>
  
          {/* Redirect to Login */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    );
};

export default Signup;