import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto, PricedColor, Price } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [colors, setColors] = useState<Array<PricedColor>>([]);

  useEffect(() => {
    let sel = localStorage.getItem("models");
    if (sel) {
      let parsed = JSON.parse(sel);
      products && setColors(products.data.filter(pr => { return pr.id === parsed.id }).map(pr => pr.colors)[0])
    }
  }, []);


  const handleColorChange = (color: string, price: Price) => {
    setSelectedColor(color);
    //window.localStorage.setItem("selectedColor", JSON.stringify(ind));
  };

  return (
    <>
      {colors.map(c => {
        return (<span className="p-2" key={c.color}>
          <input type="radio" value={c.color} name="product" onChange={() => handleColorChange(c.color, c.price)} />{" "+c.color}
        </span>
        )
      })}
      {(selectedColor !== "") && <img src="./"></img>}
    </>
  )
};

export default Colors;