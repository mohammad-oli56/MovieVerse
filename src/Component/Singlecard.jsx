import React from 'react';
import { useNavigate } from 'react-router';

const Singlecard = ({ card }) => {
  // console.log("Single card:", card);

  const { name, thumbnail_logo, frequency, price, description,id } = card;
  // console.log(id)

  const navigate = useNavigate()

  return (
    <div className="p-6  h-90 border rounded-lg shadow-[-5px_-10px_39px_-4px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] w-full bg-[linear-gradient(170deg,_rgba(249,115,22,1),_rgba(219,39,119,1)_26%,_rgba(99,102,241,1)_65%)]">
      {/* Logo */}
      <img
        src={thumbnail_logo}
        alt={`${name} logo`}
        className="h-16 mb-4 object-contain mx-auto"
      />

      {/* Plan Name */}
      <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>

      {/* Plan Price & Frequency */}
      <p className="text-lg font-semibold text-center mb-4">${price} / {frequency}</p>

      {/* Description */}
      <p className="text-white font-bold text-sm mb-4">{description}</p>

      {/* Features List */}
      {/* <div className="mb-4">
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div> */}

      {/* Subscription Benefits */}
      {/* <div className="mb-4">
        <h3 className="font-semibold">Benefits:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {subscription_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div> */}

      {/* Ratings */}
      {/* <p className="text-sm text-gray-600">
        ⭐ {ratings} ({number_of_reviews} reviews)
      </p> */}

      <div className='flex justify-center items-center mt-16'>
        <button onClick={()=>navigate(`/subDetails/${id}`)} className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">More Details</span>
        </button>
      </div>
    </div>
  );
};

export default Singlecard;
