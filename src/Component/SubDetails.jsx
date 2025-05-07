import React from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';


const SubDetails = () => {
  const { id } = useParams();
  const data = useLoaderData()
  const singlcard = data.find(data => data.id == id);



  // const navigate = useNavigate()
  // console.log(userprofile?.email)


  const handleSubscribe = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You have successfully subscribed.',
      icon: 'success',
      confirmButtonColor: '#10B981', // green-500
    });
  };


  const { name, thumbnail_logo, frequency, price, description, features, subscription_benefits, ratings, number_of_reviews, } = singlcard;
  return (
    <>
      <div className="p-6 my-5 mx-auto border rounded-lg shadow-[-5px_-10px_39px_-4px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] w-90 bg-[linear-gradient(170deg,_rgba(249,115,22,1),_rgba(219,39,119,1)_26%,_rgba(99,102,241,1)_65%)]">
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
        <p className="text-white font-bold text-sm mb-4 text-center">{description}</p>

        {/* Features List */}
        <div className="mb-4 ">
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-sm text-white">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Subscription Benefits */}
        <div className="mb-4">
          <h3 className="font-semibold">Benefits:</h3>
          <ul className="list-disc list-inside text-sm text-white">
            {subscription_benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Ratings */}

      <div className='border-2 rounded-lg my-2 text-center'>
      <p className="text-3xl font-bold text-white">
          {ratings}⭐
        </p>
        <p>({number_of_reviews} reviews)</p>

      </div>
        <div className='flex justify-center text-center'>

          <Link to='/review'
            onClick={handleSubscribe}
            className="relative px-10 py-3 font-medium text-white w-full transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease"
          >
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  fill="#FFF"
                  fillOpacity=".1"
                />
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  fill="#FFF"
                  fillOpacity=".1"
                />
              </svg>
            </span>
            <span className="relative">Subscribe</span>
          </Link>

        </div>



      </div>

      <div className='flex justify-center items-center mb-4'>
        <Link to='/'>
          <button className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Back </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SubDetails;