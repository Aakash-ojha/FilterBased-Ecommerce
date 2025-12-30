import React from "react";

const Input = ({ query, setQuery }) => {
  function hanldesearch(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  return (
    <div>
      <input
        value={query}
        placeholder="Search Shoes"
        className=" rounded-2xl pl-3 pr-18 py-1  outline-none shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] flex-wrap lg:pr-70"
        onChange={hanldesearch}
      />
    </div>
  );
};

export default Input;
