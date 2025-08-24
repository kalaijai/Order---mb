import React from "react";

const Filters = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="🔍 Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        <option value="All">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
        <option value="South Indian">South Indian</option>
        <option value="North Indian">North Indian</option>
        <option value="Snacks">Snacks</option>
        <option value="Breads">Breads</option>
      </select>
    </div>
  );
};

export default Filters;