import Category from "./Category";
import Colors from "./Colors";
import Price from "./Price";

const Sidebar = ({
  shoesData,

  selectCategory,
  setSelectedCategory,

  selectColor,
  setSelectColor,

  selectPrice,
  setSelectedPrice,
}) => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center mt-1 mb-5 justify-center text-3xl">
        🛒
      </div>
      <Category
        selectCategory={selectCategory}
        setSelectedCategory={setSelectedCategory}
        shoesData={shoesData}
      />

      <Colors
        selectColor={selectColor}
        setSelectColor={setSelectColor}
        shoesData={shoesData}
      />

      <Price
        selectPrice={selectPrice}
        setSelectedPrice={setSelectedPrice}
        shoesData={shoesData}
      />
    </div>
  );
};

export default Sidebar;
