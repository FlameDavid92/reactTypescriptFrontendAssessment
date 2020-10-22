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
  
  useEffect(() => {
    let sel = localStorage.getItem("models");
    if(sel){
      setSelected(JSON.parse(sel).id);
      totalObj?.setTotal(JSON.parse(sel).total)
      console.log(sel);
    }
      
  }, []);

  const handleProductChange = (startingPrice: Price, id:number) => {
    /*if (totalObj) {
      if (selected && totalObj.total.value !== 0) {
        totalObj.setTotal({ value: (totalObj.total.value - selectedProduct.startingPrice.value) + product.startingPrice.value, currency: totalObj.total.currency });
      } else {
        totalObj.setTotal({ value: product.startingPrice.value, currency: totalObj.total.currency });
      }
    }*/
    if(totalObj){
      if(selected){
        totalObj.setTotal({...product.startingPrice});
      }
    }
    totalObj && localStorage.setItem("models", JSON.stringify({id : id, total: totalObj.total}));
    setSelected(id);
  }
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
                <input type="radio" value={pr.name} name="product" checked={pr.id === selected} onChange={() => handleProductChange(pr, pr.id)} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};
export default Models;