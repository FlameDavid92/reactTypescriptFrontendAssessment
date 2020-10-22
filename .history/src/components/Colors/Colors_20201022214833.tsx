import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selected, setSelected] = useState<number|null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    let sel = localStorage.getItem("models");
      if(sel){
        let parsed = JSON.parse(sel);
        setSelected(parsed.id);
        products && console.log(JSON.stringify(products.data.filter(pr => pr.id == selected)))
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