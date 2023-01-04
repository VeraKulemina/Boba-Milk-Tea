import React from "react";

function Search({setSearchTerm, searchTerm}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    return setSearchTerm(e.target.value);
  }

  return (
    <div className="searchbar" >
      <label htmlFor="search" >Search:</label>
      <input
        type="text"
        id="search"
        placeholder="type to search"
        value={searchTerm}
        onChange={handleSubmit} 
      />
    </div>
  );
}

export default Search;