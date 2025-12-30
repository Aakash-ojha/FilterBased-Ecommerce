const Price = ({ selectPrice, setSelectedPrice }) => {
  const PRICE_RANGES = [
    { label: "All", min: null, max: null },
    { label: "0 - 50", min: 0, max: 50 },
    { label: "50 - 100", min: 50, max: 100 },
    { label: "100 - 150", min: 100, max: 150 },
    { label: "150 - 200", min: 150, max: 200 },
  ];

  return (
    <div className="flex flex-col gap-1 ml-4">
      <h2 className="font-bold text-xl">Category</h2>
      {PRICE_RANGES.map((range) => {
        const isActive =
          selectPrice?.min === range.min && selectPrice.max === range.max;

        return (
          <div className="flex flex-row gap-2 " key={range.label}>
            <input
              type="radio"
              name="price"
              checked={isActive}
              onChange={() => {
                setSelectedPrice(range);
              }}
            />
            <span>{range.label}</span>
          </div>
        );
      })}

      <div></div>
    </div>
  );
};

export default Price;
