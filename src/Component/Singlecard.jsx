import React from 'react';

const Singlecard = ({ card }) => {
  console.log("Single card:", card);

  const { name, thumbnail_logo, frequency, price, description, features, subscription_benefits, ratings, number_of_reviews } = card;

  return (
    <div className="p-6 border rounded-lg shadow-[-5px_-10px_39px_-4px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] w-full bg-[linear-gradient(170deg,_rgba(249,115,22,1),_rgba(219,39,119,1)_26%,_rgba(99,102,241,1)_45%)]">
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
      <p className="text-gray-600 text-sm mb-4">{description}</p>

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
      <p className="text-sm text-gray-600">
        ⭐ {ratings} ({number_of_reviews} reviews)
      </p>
    </div>
  );
};

export default Singlecard;
