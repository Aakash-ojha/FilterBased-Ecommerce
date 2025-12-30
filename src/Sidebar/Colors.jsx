const Colors = ({ selectColor, setSelectColor, shoesData }) => {
  const colorCategories = [
    "All Colors",
    ...Array.from(new Set(shoesData.map((shoe) => shoe.color))),
  ];

  return (
    <div className="flex flex-col ml-4 mt-5">
      <h1 className="text-xl font-bold ">Colors</h1>

      {colorCategories.map((color) => {
        const isActive =
          color === "All Colors"
            ? selectColor === "All Colors"
            : selectColor === color;
        return (
          <div className="flex flex-row gap-2" key={color}>
            <input
              type="radio"
              value={color}
              name="color"
              color={color}
              checked={isActive}
              onChange={() => {
                setSelectColor(color);
              }}
            />
            <span>{color}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
