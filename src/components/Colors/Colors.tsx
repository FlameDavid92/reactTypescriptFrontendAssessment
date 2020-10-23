import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto, Price } from '../../model/interfaces';
import { printPrice } from '../../utils/price';

import {sync} from '../../utils/localTotalSync';

const Colors: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedProduct, setselectedProduct] = useState<Auto | null>(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      let sel = localStorage.getItem("models");
      if (sel) {
        let parsed = JSON.parse(sel);
        products && setselectedProduct(products.data.filter(pr => { return pr.id === parsed.id })[0])
      }
      let col = localStorage.getItem("color");
      if (col) {
        setSelectedColor(JSON.parse(col));
      }
      setFirstRender(false);
    }
  }, [products, firstRender, totalObj]);

  const handleColorChange = (ind: number, price: Price) => {
    setSelectedColor(ind);
    localStorage.setItem("color", JSON.stringify(ind));
    localStorage.setItem("colorTotal", JSON.stringify(price));
    sync(totalObj);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="row justify-content-center">
          {selectedProduct?.colors.map((c, ind) => {
            return (<div className="col-12 col-lg-3 mb-2" key={c.color}>
              <input type="radio" value={c.color} name="product" checked={ind === selectedColor} onChange={() => handleColorChange(ind, c.price)} /><span className="pl-3 myLabel">{c.color + " " + c.price.currency + printPrice(c.price.value)}</span>
            </div>
            )
          })}
        </div>
      </div>
      <div className="col-12 col-lg-7">
        {(selectedColor !== null && selectedProduct) ? <img className="img-fluid" src={selectedProduct.images[selectedColor]} alt={selectedProduct.colors[selectedColor].color}></img> : <></>}
      </div>
    </div>
  )
};

export default Colors;