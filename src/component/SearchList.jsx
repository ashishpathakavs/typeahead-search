const SearchList = ({ list, selectedIndex, handleSelect }) => {
  return (
    <div className="searchlist-container">
      {list.map((item, idx) => (
        <div
          key={item}
          className={`list-item ${selectedIndex === idx ? "higlight" : ""}`}
          onClick={() => {
            handleSelect(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SearchList;
