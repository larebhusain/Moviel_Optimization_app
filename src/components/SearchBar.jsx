const SearchBar = ({ setQuery }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <input
        type="search"
        placeholder="Search movie..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-md bg-gray-500 text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default SearchBar;
