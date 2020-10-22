import React, { FC, useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { printPrice } from '../../utils/price';
import { Price } from '../../model/interfaces';
import scss from './models.module.scss';

const Models: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selected, setSelected] = useState<number|null>(null);
  
  
  const handleProductChange = (startingPrice: Price, id:number) => {
    totalObj && totalObj.setTotal(startingPrice);
    totalObj && localStorage.setItem("models", JSON.stringify({id : id, total: startingPrice}));
    setSelected(id);
  }
  
  useEffect(() => {
    let sel = localStorage.getItem("models");
    if(sel){
      let parsed = JSON.parse(sel);
      setSelected(parsed.id);
      handleProductChange(parsed.total, parsed.id)
    }
  }, [handleProductChange]);
  
  return (
    <>
      <div className="row">
        {products && Object.values(products).map(pr => {
          return (
            <div key={pr.name} className="col-6">
              <div className={scss.product}>
                <div>{pr.name}</div>
                <img className="img-fluid" src={pr.images[0]} alt={pr.name} />
                <div>from {pr.startingPrice.currency + printPrice(pr.startingPrice.value)}</div>
                <input type="radio" value={pr.name} name="product" checked={pr.id === selected} onChange={() => handleProductChange(pr.startingPrice, pr.id)} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};
export default Models;