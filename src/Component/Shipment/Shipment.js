import React, { useContext } from "react";
import { CategoryContex } from "../../App";

const Shipment = () => {
  const [category, setCategory] = useContext(CategoryContex);

  return (
    <div>
      <h1>This is Shipment</h1>
      <button onClick={() => setCategory(category + 1)}>
        Increase category
      </button>
    </div>
  );
};

export default Shipment;
