import React from 'react';
import { MdBookmarkAdd, MdDelete, MdFileDownload, MdOutlineWatchLater } from 'react-icons/md';
import { Link, useLoaderData, useParams } from 'react-router';
import { addDownload } from '../Utils';
import { addsavenext } from '../Utils/index2';

const MovieDetals = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id,data)

    const singleMovie = data.find(data => data.id == id)
    console.log(singleMovie);

    const handeldownload =()=>{
        addDownload(singleMovie);
    }

    const handelSavenext =()=>{
        addsavenext(singleMovie)
    }



    const { title, poster,Description,ReleaseDate } = singleMovie
    return (
        <div className='w-11/12 mx-auto my-6 '>

            <div className="card card-side bg-white shadow-sm text-black p-3">
                <figure>
                    <img
                        className='h-60 w-96'
                        src={poster}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">Title : <span className='text-2xl'>{title}</span></h2>
                    <p><span className='font-bold'>Description</span> : {Description}</p>
                    <p><span className='font-bold'>Release Date </span>: {ReleaseDate}</p>


                   <Link to='/Watch' onClick={handelSavenext} className='btn'>Save to Watch Later<MdOutlineWatchLater /></Link>

                   <Link to='/download' onClick={handeldownload} className='btn'><MdDelete size={25} /> <MdFileDownload /> </Link>


                </div>
            </div>
        </div>
    );
};

export default MovieDetals;