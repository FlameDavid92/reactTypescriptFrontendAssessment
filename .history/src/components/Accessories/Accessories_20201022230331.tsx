import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";

const Accessories: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [firstRender, setFirstRender] = useState(true);
  const [localTotal, setLocalTotal] = useState(0);

  useEffect(() => {
    if(firstRender){
      
      setFirstRender(false);
    }
  }, [firstRender]);


  const handleColorChange = (ind: number, price: Price) => {
    setSelectedColor(ind);
    totalObj?.setTotal(t => {return {...t, value: (t.value-localTotal)+price.value}});
    setLocalTotal(price.value);
  };

  return (
    <div className="row justify-content-center">
      
    </div>
  )
};

export default Accessories;