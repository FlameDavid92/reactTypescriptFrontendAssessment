import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto, PricedColor, Price } from '../../model/interfaces';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedProduct, setselectedProduct] = useState<Auto | null>(null);

  useEffect(() => {
    let sel = localStorage.getItem("models");
    if (sel) {
      let parsed = JSON.parse(sel);
      products && setselectedProduct(products.data.filter(pr => { return pr.id === parsed.id })[0])
    }
  }, []);


  const handleColorChange = (ind: number, price: Price) => {
    setSelectedColor(ind);
    totalObj?.setTotal(t => {return {...t, value: t.value+price.value}});
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12">
        {selectedProduct?.colors.map((c, ind) => {
          return (<span className="p-2" key={c.color}>
            <input type="radio" value={c.color} name="product" onChange={() => handleColorChange(ind, c.price)} />{" " + c.color}
          </span>
          )
        })}
      </div>
      <div className="col-7">
        {(selectedColor !== null && selectedProduct) ? <img className="img-fluid" src={selectedProduct.images[selectedColor]} alt={selectedProduct.colors[selectedColor].color}></img> : <></>}
      </div>
    </div>
  )
};

export default Colors;