import React from "react";

const Category = ({ selectCategory, setSelectedCategory, shoesData }) => {
  const categories = [
    "All Products",
    ...Array.from(new Set(shoesData.map((shoe) => shoe.category))),
  ];

  return (
    <div className="flex flex-col gap-1 ml-4">
      <h2 className="font-bold text-xl">Category</h2>
      {categories.map((cat) => {
        const isActive =
          cat === "All Products"
            ? selectCategory === "All Products"
            : selectCategory === cat;

        return (
          <div className="flex flex-row gap-2 " key={cat}>
            <input
              type="radio"
              name="cat"
              value={cat}
              checked={isActive}
              onChange={() => {
                setSelectedCategory(cat);
              }}
            />
            <span>{cat}</span>
          </div>
        );
      })}

      <div></div>
    </div>
  );
};

export default Category;
