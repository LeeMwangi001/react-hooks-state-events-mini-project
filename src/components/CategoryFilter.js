// CategoryFilter.js
import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const isSelected = (category) => {
    return selectedCategory === category ? "selected" : "";
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={isSelected("All")}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={isSelected(category)}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
