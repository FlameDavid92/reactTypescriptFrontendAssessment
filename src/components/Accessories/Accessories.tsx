import React, { FC, useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { TotalContext } from "../../contexts/totalContext";
import { Auto, Accessory } from '../../model/interfaces';
import { printPrice } from '../../utils/price';

import {sync} from '../../utils/localTotalSync';

const Accessories: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [firstRender, setFirstRender] = useState(true);
  const [selectedProduct, setselectedProduct] = useState<Auto | null>(null);
  const [selectedAccessories, setSelectedAccessories] = useState<Array<boolean>>([]);

  useEffect(() => {
    if (firstRender) {
      let sel = localStorage.getItem("models");
      if (sel) {
        let parsed = JSON.parse(sel);
        products && setselectedProduct(products.data.filter(pr => { return pr.id === parsed.id })[0])
      }

      let acc = localStorage.getItem("accessories");
      if (acc) {
        let parsed2 = JSON.parse(acc);
        setSelectedAccessories(parsed2);
      }
      setFirstRender(false);
    }
  }, [products, firstRender]);

  const handleAccesoryChange = (e: React.ChangeEvent<HTMLInputElement>, ind: number, accessory: Accessory) => {
    let accTot = localStorage.getItem("accessoriesTotal");

    if (e.currentTarget.checked) {
      if (selectedAccessories.length === 0) {
        setSelectedAccessories(a => Array(selectedProduct?.accessories.length).fill(false));
      }
      setSelectedAccessories(ap => {
        let newArray = [...ap];
        newArray[ind] = true;
        localStorage.setItem("accessories", JSON.stringify(newArray));
        return newArray;
      });
      
      if (accTot) {
        let parsed = JSON.parse(accTot);
        localStorage.setItem("accessoriesTotal", JSON.stringify({ value: parsed.value + accessory.price.value, currency: parsed.currency }));
      } else {
        localStorage.setItem("accessoriesTotal", JSON.stringify(accessory.price));
      }
      sync(totalObj);

    } else {
      setSelectedAccessories(ap => {
        let newArray = [...ap];
        newArray[ind] = false;
        localStorage.setItem("accessories", JSON.stringify(newArray));
        return newArray;
      });

      if(accTot){
        let parsed = JSON.parse(accTot);
        localStorage.setItem("accessoriesTotal", JSON.stringify( {value: parsed.value - accessory.price.value, currency: parsed.currency} ));
      }
      sync(totalObj);
    }
  };

  return (
    <div className="row justify-content-center">
      {selectedProduct?.accessories.map((acc, ind) =>
        <div className="col-12 col-lg-3 mb-2" key={acc.name}>
          <div className="row">
            <div className="col-12">
              <input type="checkbox" value={acc.name} name="product" checked={selectedAccessories[ind] || false} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleAccesoryChange(event, ind, acc)} /><span className="pl-1 myLabelSm">{acc.name}</span>
              <div className="myLabelSm">{acc.price.currency + printPrice(acc.price.value)}</div>
            </div>
            <div className="col 12">
              {selectedAccessories[ind] && <img className="mt-2 img-fluid" style={{ borderRadius: 5 }} src={acc.image} alt={acc.name} />}
            </div>
          </div>
        </div>)
      }

    </div>
  )
};

export default Accessories;