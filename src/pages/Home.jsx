import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import Singlecard from '../Component/Singlecard';
import Movie from '../Component/movie';
import More from '../Component/More';
import Collspan from '../Component/Collspan';
import { Helmet } from 'react-helmet-async';
import img_1 from '../assets/original-98f50d5ce47e2deb898713ff0fe099e4.jpg'
import img_2 from '../assets/1741900029595_SeedoftheSacredFig-27Mar-websiteslider.jpg'
import img_3 from '../assets/dark-knight-rises-movie-poster-banner-catwoman.jpg'
import img_4 from '../assets/fancy-slider.png'


const Home = () => {

  // const data = useLoaderData();
  // console.log(data)
  const { subPlan, movies } = useLoaderData();
  // console.log(subPlan,movies) 



  return (

    <>
      <Helmet>
        <title>Home | MovieVerse</title>
        <meta name="description" content="Browse the best movies on MovieVerse" />
      </Helmet>
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

        <div className='max-w-screen-2xl  mx-auto px-8 mt-10 md:px-12 lg:px-16 '>
          <h1 className='text-purple-500 font-bold text-3xl mb-3.5'>Frequently Asked Questions</h1>
          <Collspan></Collspan>
        </div>

       
        <h1 className="font-bold  mt-10 text-left text-3xl w-11/12 mx-auto text-purple-500">UpComing...</h1>
        <div className=' bg-[radial-gradient(120%_160%_at_0%_100%,rgba(176,91,30,0.8)_0%,rgba(37,40,194,0.78)_95%)] p-3 w-11/12 mx-auto rounded-lg mt-4'>
          
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src={img_1}
                className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src={img_2}
                className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src={img_3}
                className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src={img_4} alt="" />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
          </div>

        </div>

        <div className='h-12'>

        </div>

      </div>
    </>
  );
};

export default Home;