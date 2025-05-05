import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const SubDetails = () => {
    const {id}=useParams();
    const data = useLoaderData()
    console.log(data)
    
    const singlcard = data.find(data=>data.id == id);

    console.log(singlcard)

    const { name, thumbnail_logo, frequency, price, description, features, subscription_benefits, ratings, number_of_reviews, } = singlcard;
    return (
        <div className="p-6 my-10 mx-auto border rounded-lg shadow-[-5px_-10px_39px_-4px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] w-90 bg-[linear-gradient(170deg,_rgba(249,115,22,1),_rgba(219,39,119,1)_26%,_rgba(99,102,241,1)_65%)]">
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
      <div className="mb-4">
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Subscription Benefits */}
      <div className="mb-4">
        <h3 className="font-semibold">Benefits:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {subscription_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Ratings */}
      <p className="text-sm mb-4 text-gray-600">
        ⭐ {ratings} ({number_of_reviews} reviews)
      </p>

          <div className='flex justify-center items-center'>
          <Link to='/'>
          <a class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
    </span>
    <span class="relative text-white">Back</span>
</a>
          </Link>
          </div>
            
        </div>
    );
};

export default SubDetails;