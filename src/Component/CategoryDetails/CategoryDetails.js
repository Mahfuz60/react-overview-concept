import React, { useContext } from "react";
import { CategoryContex } from "../../App";

const CategoryDetails = (props) => {
  const { name } = props.product;

  return (
    <div>
      <h4>Selected Category:{name}</h4>
    </div>
  );
};

export default CategoryDetails;
