import Product from "./Product";
import Recommended from "./Recommended";
import Nav from "./Navigation/Nav";
import Category from "./Sidebar/Category";

import shoesData from "./db";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  const [selectCategory, setSelectedCategory] = useState("All Products");

  const [selectColor, setSelectColor] = useState("All Colors");

  const [selectPrice, setSelectedPrice] = useState({
    min: null,
    max: null,
  });

  const [selectCompany, setSelectCompany] = useState("All Products");

  // Input filter
  const [query, setQuery] = useState("");

  const filteredShoes = shoesData.filter((shoe) => {
    const filterFromSearch =
      query === ""
        ? query === ""
        : shoe.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());

    console.log(filterFromSearch);

    const filterCompany =
      selectCompany === "All Products" || shoe.company === selectCompany;

    const categoryMatch =
      selectCategory === "All Products" || shoe.category === selectCategory;

    const colorMatch =
      selectColor === "All Colors" || shoe.color === selectColor;

    const priceMatch =
      selectPrice.min === null ||
      (shoe.newPrice >= selectPrice.min && shoe.newPrice < selectPrice.max);

    return (
      filterFromSearch &&
      filterCompany &&
      categoryMatch &&
      colorMatch &&
      priceMatch
    );
  });

  return (
    <div className="m-1 grid grid-cols-[200px_1fr] lg:grid-cols-[0.7fr_3fr]">
      <aside className="sticky top-0 h-screen lg:sticky lg:top-0 lg:h-screen border-blue-300 border-r">
        <Sidebar
          selectCategory={selectCategory}
          setSelectedCategory={setSelectedCategory}
          selectColor={selectColor}
          setSelectColor={setSelectColor}
          shoesData={shoesData}
          selectPrice={selectPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </aside>

      <div className="flex flex-col gap-5 p-2">
        <Nav query={query} setQuery={setQuery} />

        <Recommended
          shoesData={shoesData}
          selectCompany={selectCompany}
          setSelectCompany={setSelectCompany}
        />
        <Product products={filteredShoes} />
      </div>
    </div>
  );
};

export default Home;
