import React, { FC, useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { printPrice } from '../../utils/price';
import { Price } from '../../model/interfaces';
import scss from './models.module.scss';

import {sync} from '../../utils/localTotalSync';

const Models: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selected, setSelected] = useState<number|null>(null);
  const [firstRender, setFirstRender] = useState(true);
  
  useEffect(() => {
    if(firstRender){
      let sel = localStorage.getItem("models");
      if(sel){
        let parsed = JSON.parse(sel);
        setSelected(parsed.id);
      }
      sync(totalObj);
      setFirstRender(false);
    }
  }, [totalObj,firstRender]);

  const handleProductChange = (startingPrice: Price, id:number) => {
    localStorage.removeItem("color");
    localStorage.removeItem("colorTotal");
    localStorage.removeItem("accessories");
    localStorage.removeItem("accessoriesTotal");
    totalObj?.setTotal(startingPrice);
    localStorage.setItem("models", JSON.stringify({id : id, total: startingPrice}));
    localStorage.setItem("startingPrice", JSON.stringify(startingPrice));
    setSelected(id);
  }

  return (
    <>
      <div className="row">
        {products && products.data.map(pr => {
          return (
            <div key={pr.name} className="col-12 col-lg-6">
              <div className={"py-3 "+scss.product}>
                <div className={scss.productTitle}>{pr.name}</div>
                <img className="img-fluid" src={pr.images[0]} alt={pr.name} />
                <div className="myLabel">from {pr.startingPrice.currency + printPrice(pr.startingPrice.value)}</div>
                <input className="radioButton my-3" type="radio" value={pr.name} name="product" checked={pr.id === selected} onChange={() => handleProductChange(pr.startingPrice, pr.id)} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};
export default Models;