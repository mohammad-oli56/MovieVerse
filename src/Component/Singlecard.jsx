import React from 'react';
import { useNavigate } from 'react-router';

const Singlecard = ({ card }) => {
  const { name, thumbnail_logo, frequency, price, description, id } = card;
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      className="p-6 h-90 w-full border rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] shadow-[-5px_-10px_39px_-4px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] bg-[linear-gradient(170deg,_rgba(249,115,22,1),_rgba(219,39,119,1)_26%,_rgba(99,102,241,1)_65%)]"
    >
      {/* Logo */}
      <img
        src={thumbnail_logo}
        alt={`${name} logo`}
        className="h-16 mb-4 object-contain mx-auto"
      />

      {/* Plan Name */}
      <h2 className="text-xl font-bold mb-2 text-center text-white">{name}</h2>

      {/* Plan Price & Frequency */}
      <p className="text-lg font-semibold text-center text-white mb-4">
        ${price} / {frequency}
      </p>

      {/* Description */}
      <p className="text-white font-bold text-sm mb-4">{description}</p>

      {/* More Details Button */}
      <div className="flex justify-center items-center mt-16">
        <button
          onClick={() => navigate(`/subDetails/${id}`)}
          className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100"></span>
          <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            More Details
          </span>
        </button>
      </div>
    </div>
  );
};

export default Singlecard;
