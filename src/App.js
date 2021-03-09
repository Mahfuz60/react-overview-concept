import { createContext, useState } from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Shipment from "./Component/Shipment/Shipment";

export const CategoryContex=createContext();
function App() {
  const [category,setCategory]=useState('Laptop');
  return (
    <CategoryContex.Provider value={[category,setCategory]}>
      <Header setCategory={setCategory}></Header>
      <Home ></Home>
      <Shipment></Shipment>
      
    </CategoryContex.Provider>
  );
}

export default App;
