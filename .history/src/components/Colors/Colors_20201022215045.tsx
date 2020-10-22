import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState(0);
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    let sel = localStorage.getItem("models");
      if(sel){
        let parsed = JSON.parse(sel);
        products && products.data.filter(pr => {
          console.log(pr.id,parsed.id);
          return pr.id === parsed.id}
          )
      }
  }, []);


  const handleColorChange = (ind:number)=>{
    setSelectedColor(ind);
    window.localStorage.setItem("selectedColor",JSON.stringify(ind));
  };

  return(
    <>
      {colors.map(()=><div>colore</div>)}
    </>
  )
};

export default Colors;