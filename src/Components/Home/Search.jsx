import React, { useState } from "react";

import data from "../inventory.mjs";

const SearchExample = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = data.filter(
    item =>
      item.first_name.toLocaleLowerCase().includes(filterText) ||
      item.fees.toLocaleLowerCase().includes(filterText) || 
      item.location.toLocaleLowerCase().includes(filterText) 

  );

  const itemsToDisplay = filterText ? filteredItems : data;

  return (
    <div style={{ padding: "20px 50px" }}>
      <h1>Search Page</h1>
      <input
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      {itemsToDisplay.map(item => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.first_name}</p>
          <p>{item.fees}</p>
          <p><img src={item.img} alt="Photo isn\'t working" /></p>
          <p>{item.location}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchExample;


