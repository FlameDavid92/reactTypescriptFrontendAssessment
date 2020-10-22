import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState(0);
  useEffect(() => {
    let pr = window.localStorage.getItem("selectedProduct");
    if (pr !== null) {
      pr = JSON.parse(pr);
      pr && setSelectedProduct(pr as unknown as Auto);
    }

    let cl = window.localStorage.getItem("selectedColor");
    if(cl !== null){
      cl = JSON.parse(cl);
      cl && setSelectedColor(cl as unknown as number);
    }
  }, []);


  const handleColorChange = (ind:number)=>{
    setSelectedColor(ind);
    window.localStorage.setItem("selectedColor",JSON.stringify(ind));
  };

  return(
    selectedProduct && <>
      {selectedProduct.colors.map((el,ind) => {
        return <><input type="radio" value={el} name="colors" checked={selectedProduct.colors[selectedColor] === el} onChange={() => handleColorChange(ind)} />{el}</>
      })}
      <img src={selectedProduct.images[selectedColor]} alt="colore"></img>
    </>
  )
};

export default Colors;