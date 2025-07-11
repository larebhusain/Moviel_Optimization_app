import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
const MovieList = React.lazy(() => import('./components/MovieList'));

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Discover Movies</h1>
      <SearchBar setQuery={setQuery} />

      <React.Suspense fallback={<p className="text-white  ">Loading....</p>}>
        <MovieList query={query} />
      </React.Suspense>
    </div>
  );
}

export default App;
