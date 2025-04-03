const SearchBar = ({ searchText, handleChange, setSearchText }) => {
  return (
    <div className="search-container">
      <input
        className="searchbar"
        placeholder="Search for Country"
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      {searchText.length > 0 && (
        <button onClick={() => setSearchText("")} className="search__close">
          &#10005;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
