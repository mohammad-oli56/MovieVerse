import React from 'react';

const Collspan = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">What is MovieVerse?</div>
                <div className="collapse-content text-sm">
                MovieVerse is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">What can i watch on MovieVerse?</div>
                <div className="collapse-content text-sm">
                MovieVerse has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Where can i watch?</div>
                <div className="collapse-content text-sm">
                Watch anywhere, anytime. Sign in with your MovieVerse account to watch instantly on the web at MovieVerse.
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold">Is MovieVerse Good for kids</div>
                <div className="collapse-content text-sm">
                The MovieVerse Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                </div>
            </div>

            
        </div>
    );
};

export default Collspan;