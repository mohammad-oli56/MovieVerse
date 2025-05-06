import React from 'react';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { IoDesktopOutline } from 'react-icons/io5';
import { MdCloudDownload, MdSwitchAccount } from 'react-icons/md';

const More = () => {
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 gap-3 rounedd-lg'>
            <div className="card card-border bg-base-100 bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]">
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">Enjoy on your TV</h2>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <div className="card-actions justify-end">
                        <button className=""><IoDesktopOutline  size={50}/></button>
                    </div>
                </div>
            </div>

            <div className="card card-border bg-base-100 bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]">
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">Download your shows </h2>
                    <p>Save your favorites easily and always have something to watch.</p>
                    <div className="card-actions justify-end">
                        <button ><MdCloudDownload size={50}/></button>
                    </div>
                </div>
            </div>

            <div className="card card-border bg-base-100 bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]">
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <div className="card-actions justify-end">
                        <button><BiSolidCameraMovie size={50}/></button>
                    </div>
                </div>
            </div>

            <div className="card card-border bg-base-100 bg-[radial-gradient(195%_160%_at_0%_25%,rgba(0,28,142,1)_0%,rgba(227,77,77,1)_90%)]">
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">Create profiles for kids</h2>
                    <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                    <div className="card-actions justify-end">
                        <button ><MdSwitchAccount size={50}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;