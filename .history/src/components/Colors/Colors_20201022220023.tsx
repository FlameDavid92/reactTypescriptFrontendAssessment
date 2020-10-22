import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto, PricedColor } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState(0);
  
  useEffect(() => {
    let sel = localStorage.getItem("models");
      if(sel){
        let parsed = JSON.parse(sel);
        products && console.log(products.data.filter(pr => {return pr.id === parsed.id}).map(pr => pr.colors)[0])
      }
  }, []);


  const handleColorChange = (ind:number)=>{
    setSelectedColor(ind);
    window.localStorage.setItem("selectedColor",JSON.stringify(ind));
  };

  return(
    <>
    </>
  )
};

export default Colors;