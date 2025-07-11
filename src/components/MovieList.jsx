import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = query
        ? 'https://api.themoviedb.org/3/search/movie'
        : 'https://api.themoviedb.org/3/movie/popular';

      const response = await axios.get(endpoint, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: 'en-US',
          query: query,
        },
      });

      setMovies(response.data.results || []);
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
        ))}
      </div>
 
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </>
  );
};

export default MovieList;
