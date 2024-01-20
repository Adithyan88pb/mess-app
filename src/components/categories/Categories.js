import React from "react";

function Categories({ categories, fillterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button type="button" className="filter-btn" onClick={()=>fillterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
