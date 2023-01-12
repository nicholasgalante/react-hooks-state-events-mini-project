import React from "react";

function CategoryFilter({ categories, handleFilter, selectedCategory }) {


  const categoryArray = categories.map(category => {

    const className = category === selectedCategory ? "selected" : null;

    return <button
      key={category}
      className={className}
      onClick={() => handleFilter(category)}
    >
      {category}
    </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
