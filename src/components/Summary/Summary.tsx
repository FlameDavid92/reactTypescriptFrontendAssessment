import React, { FC, useEffect, useContext, useState } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { Auto } from '../../model/interfaces';
import { printPrice } from '../../utils/price';

const Summary: FC = () => {
  const products = useContext(ProductsContext);
  const [selectedProduct, setselectedProduct] = useState<Auto | null>(null);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedAccessories, setSelectedAccessories] = useState<Array<boolean>>([]);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    let sel = localStorage.getItem("models");
    if (sel) {
      let parsed = JSON.parse(sel);
      products && setselectedProduct(products.data.filter(pr => { return pr.id === parsed.id })[0])
    }
    let col = localStorage.getItem("color");
    if (col) {
      setSelectedColor(JSON.parse(col));
    }
    let acc = localStorage.getItem("accessories");
    if (acc) {
      let parsed2 = JSON.parse(acc);
      setSelectedAccessories(parsed2);
    }
    setFirstRender(false);
  }, [firstRender, products]);
  return (
    <>
      {selectedProduct &&
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row myLabel">Model</th>
              <td className="myLabelSm">{selectedProduct.name}</td>
              <td className="myLabelSm">{selectedProduct && selectedProduct.startingPrice.currency + printPrice(selectedProduct.startingPrice.value)}</td>
            </tr>
            <tr>
              <th scope="row">Color</th>
              <td className="myLabelSm">{selectedProduct.colors[selectedColor].color}</td>
              <td className="myLabelSm">{selectedProduct && selectedProduct.colors[selectedColor].price.currency + printPrice(selectedProduct.colors[selectedColor].price.value)}</td>
            </tr>
            {selectedProduct.accessories.filter((a, ind) => selectedAccessories[ind]).map(acc => {
              return (
                <tr>
                  <th scope="row">Accesory</th>
                  <td className="myLabelSm">{acc.name}</td>
                  <td className="myLabelSm">{acc.price.currency + printPrice(acc.price.value)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
  )
};

export default Summary;