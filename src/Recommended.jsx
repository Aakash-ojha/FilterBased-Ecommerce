import { useState } from "react";
import StyledButton from "./components/button";

const Recommended = ({ shoesData, selectCompany, setSelectCompany }) => {
  function handleClick(e) {
    setSelectCompany(e);
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-blue-500"> Recommended</h2>

      <div className="flex flex-wrap gap-2 w-full">
        <StyledButton
          active={selectCompany === "All Products"}
          value="All Products"
          onClick={() => handleClick("All Products")}
        >
          All Products
        </StyledButton>

        <StyledButton
          onClick={() => handleClick("Nike")}
          active={selectCompany === "Nike"}
        >
          Nike
        </StyledButton>

        <StyledButton
          onClick={() => handleClick("Adidas")}
          active={selectCompany === "Adidas"}
        >
          Adidas
        </StyledButton>

        <StyledButton
          onClick={() => handleClick("Puma")}
          active={selectCompany === "Puma"}
        >
          Puma
        </StyledButton>

        <StyledButton
          onClick={() => handleClick("Vans")}
          active={selectCompany === "Vans"}
        >
          Vans
        </StyledButton>
      </div>
    </div>
  );
};

export default Recommended;
