import React from 'react';

const SingleDownload = ({ d, onDelete }) => {
    const { id, poster, title } = d;

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div>
            <div className="card card-side bg-gradient-to-t from-sky-500 to-indigo-500 shadow-sm">
                <figure>
                    <img
                        className="h-40"
                        src={poster}
                        alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDownload;
