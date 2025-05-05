import React, { useContext, useState } from 'react';
import { valueContext } from '../Rootlayout/Rootlayout';
import { BiHide, BiShow } from 'react-icons/bi';

const Login = () => {
  const { uselogin } = useContext(valueContext);
  const [showPassword, setShowPassword] = useState(false);

  const handellogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    uselogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back to MovieVerse
        </h2>

        {/* Form */}
        <form onSubmit={handellogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black"
            />
          </div>

          {/* Password Input with toggle */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border rounded-md placeholder-gray-400 text-black pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-sm text-gray-600 focus:outline-none"
            >
              {showPassword ? <BiHide size={20} />: <BiShow size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button className="w-full py-3 border text-black flex items-center justify-center rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-600 hover:text-purple-700">
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-purple-600 hover:text-purple-700">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
