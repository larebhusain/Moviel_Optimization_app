import React from 'react';

const MovieCard = React.memo(({ movie, onClick }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      onClick={() => onClick(movie)}
      className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
    >
      <img
        src={imgUrl}
        alt={movie.title}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-100 truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{movie.release_date}</p>
      </div>
      
    </div>
  );
});

export default MovieCard;
