import { useEffect, useState } from "react";
import "./styles.css";
import SearchBar from "./component/SearchBar";
import SearchList from "./component/SearchList";
import { suggestionsList } from "./data";

export default function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [isItemSelected, setIsItemSelected] = useState(false);

  useEffect(() => {
    setSelectedIdx(-1);
    if (text !== "" && !isItemSelected) {
      const matchedItems = suggestionsList.filter((item) => {
        return item.toLowerCase().includes(text.toLowerCase());
      });

      setResults(matchedItems);
    } else {
      setResults([]);
    }
  }, [text]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIdx((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIdx((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIdx >= 0) {
      setText(results[selectedIdx]);
      setSelectedIdx(-1);
      setIsItemSelected(true);
    }
  };

  const handleSelect = (selectedText) => {
    setText(selectedText);
    setResults([]);
    setIsItemSelected(true);
  };

  const handleTextChange = (e) => {
    const text = e.target.value.trim();
    setText(text);
    setIsItemSelected(false);
  };

  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <h1>Typeahead (Offline)</h1>
      <SearchBar
        handleChange={handleTextChange}
        setSearchText={setText}
        searchText={text}
      />
      <SearchList
        list={results}
        selectedIndex={selectedIdx}
        handleSelect={handleSelect}
      />
    </div>
  );
}
