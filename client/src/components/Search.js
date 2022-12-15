import React from "react";

function Search({setSearchTerm, searchTerm}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    return setSearchTerm(e.target.value);
  }

  return (
    <div className="searchbar" >
      <label htmlFor="search" >Search Art:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleSubmit} 
      />
    </div>
  );
}

export default Search;