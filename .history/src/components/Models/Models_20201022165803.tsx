import React, { FC, useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../data/products";
import { TotalContext } from "../../utils/sections-utils";
import './models.scss';
import { printPrice } from '../../utils/price';
import { Auto } from '../../model/interfaces';

const Models: FC = () => {
  const products = useContext(ProductsContext);
  const totalObj = useContext(TotalContext);
  const [selectedProduct, setSelectedProduct] = useState<Auto | null>(null);
  console.log("rendered and selectedProduct is ",selectedProduct);
  useEffect(() => {
    /*let pr = localStorage.getItem("selectedProduct");
    if (pr !== null) {
      pr = JSON.parse(pr);
      setSelectedProduct(pr as unknown as Auto);
    }*/
  }, [])
  const handleProductChange = (product: Auto) => {
    if (totalObj) {
      if (selectedProduct && totalObj.total.value !== 0) {
        totalObj.setTotal({ value: (totalObj.total.value - selectedProduct.startingPrice.value) + product.startingPrice.value, currency: totalObj.total.currency });
      } else {
        totalObj.setTotal({ value: product.startingPrice.value, currency: totalObj.total.currency });
      }
    }
    //localStorage.setItem("selectedProduct", JSON.stringify(product));
    setSelectedProduct(product);
  }
  return (
    <>
      <div className="row">
        {products && Object.values(products).map(pr => {
          return (
            <div key={pr.name} className="col-6">
              <div className="product">
                <div>{pr.name}</div>
                <img className="img-fluid" src={pr.images[0]} alt={pr.name} />
                <div>from {pr.startingPrice.currency + printPrice(pr.startingPrice.value)}</div>
                <input type="radio" value={pr.name} name="product" checked={selectedProduct?.name === pr.name} onChange={() => handleProductChange(pr)} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};
export default Models;