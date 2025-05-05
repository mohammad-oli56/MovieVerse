import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import Singlecard from '../Component/Singlecard';
import Movie from '../Component/movie';
import More from '../Component/More';
import Collspan from '../Component/Collspan';


const Home = () => {

  // const data = useLoaderData();
  // console.log(data)
  const { subPlan, movies } = useLoaderData();
  // console.log(subPlan,movies) 

  return (
    <div className='bg-[radial-gradient(#ffffff33_1px,#0f172a_1px)] bg-[size:20px_20px]'>

      <Banner></Banner>

      <h1 className="font-bold mb-12 text-center text-4xl text-purple-500">
        All Movies
      </h1>


      <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-2 lg:grid-cols-6 gap-9 mb-20'>
        {
          movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
        }
      </div>

      <h1 className="font-bold mb-10 text-center text-4xl text-purple-500">
      Subscription Plan
      </h1>

      <div className='max-w-screen-2xl mb-20 mx-auto px-8 md:px-12 lg:px-16 grid lg:grid-cols-3 gap-9'>
        {
          subPlan.map(card => <Singlecard card={card}></Singlecard>)
        }
      </div>
       
     <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 '>
     <h1 className='text-purple-500 font-bold text-3xl mb-3.5'>More Reasons to Join</h1>
     <More></More>
     </div>

     <div className='max-w-screen-2xl mx-auto px-8 mt-10 md:px-12 lg:px-16 '>
     <h1 className='text-purple-500 font-bold text-3xl mb-3.5'>Frequently Asked Questions</h1>
      <Collspan></Collspan>
     </div>

    </div>
  );
};

export default Home;