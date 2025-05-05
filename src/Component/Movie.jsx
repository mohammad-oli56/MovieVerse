import React from 'react';

const Movie = ({movie}) => {
    console.log(movie)
    const {poster,title} =movie
    return (
        <div className=" rounded-lg shadow-md overflow-hidden ">
        <img src={poster} alt={title} className="w-full  object-cover" />
        
      </div>
    );
};

export default Movie;