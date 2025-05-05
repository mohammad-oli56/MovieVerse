import React from 'react';

const Collspan = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">What is MovieVerse?</div>
                <div className="collapse-content text-sm">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                </div>
            </div>
        </div>
    );
};

export default Collspan;