import React, { memo } from "react";

import Card from "./components/Card";

const Product = ({ products }) => {
  return <Card products={products} />;
};

export default React.memo(Product);
