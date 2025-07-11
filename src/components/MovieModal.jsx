const MovieModal = ({ movie, onClose }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2 sm:px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white rounded-lg shadow-xl w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto max-h-[80vh]"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-300 text-2xl hover:text-white"
          >
            ✖
          </button>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 px-4 sm:px-6 pb-6">
          
          <div className="flex justify-center">
            <img
              src={imgUrl}
              alt={movie.title}
              className="w-full sm:w-[300px] max-h-[400px] object-cover rounded-md"
            />
          </div>

           
          <div className="flex flex-col justify-between w-full">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-400 mb-3 text-sm sm:text-base">
                <span className="font-semibold text-white">Release Date:</span>{" "}
                {movie.release_date}
              </p>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Overview
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-h-[200px] overflow-y-auto pr-2">
                  {movie.overview}
                </p>
              </div>
            </div>

             
            <div className="mt-6 flex justify-center lg:justify-end">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 sm:px-16 py-2 rounded transition duration-300 w-full sm:w-auto">
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
