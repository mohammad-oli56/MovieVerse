import React from 'react';
import { useNavigate } from 'react-router';

const Singlecard = ({ card }) => {
  const { name, thumbnail_logo, frequency, price, description, id } = card;
  const navigate = useNavigate();

  return (
    <div
  data-aos="fade-up"
  className="p-6 w-full border rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.02] shadow-lg bg-gradient-to-br from-orange-500 via-pink-600 to-indigo-500 text-white"
>
  {/* Logo */}
  <img
    src={thumbnail_logo}
    alt={`${name} logo`}
    className="h-16 mb-4 object-contain mx-auto"
  />

  {/* Plan Name */}
  <h2 className="text-2xl font-extrabold mb-2 text-center">{name}</h2>

  {/* Plan Price & Frequency */}
  <p className="text-lg font-medium text-center mb-4">
    ${price} <span className="font-normal text-sm">/ {frequency}</span>
  </p>

  {/* Description */}
  <p className="text-sm text-center font-light leading-relaxed mb-6">{description}</p>

  {/* Dashed Line */}
  <hr className="border-t-2 border-dashed border-white my-6" />

  {/* More Details Button */}
  <div className="flex justify-center mt-6">
    <button
      onClick={() => navigate(`/subDetails/${id}`)}
      className="w-full px-6 py-3 text-sm font-semibold bg-white text-purple-700 rounded-md transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-lg"
    >
      More Details
    </button>
  </div>
</div>


  );
};

export default Singlecard;
