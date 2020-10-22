import React, { FC, Suspense, useState } from "react";
import sections from '../../data/sections';
import { BMW_i3, BMW_i8 } from '../../data/products';
import { TotalContext } from "../../contexts/totalContext";
import { ProductsContext } from "../../contexts/productsContext";
import { SwitcherProps } from '../../model/interfaces';

const SectionsSwitcher: FC<SwitcherProps> = (props) => {
  const {currentSectionId, total, setTotal} = props;
  const [rendered, setRendered] = useState();
  
  const renderSection = () => {
    let toRender;
    sections.some(s => {
      if (s.id === currentSectionId) {
        toRender = s.component;
        return true;
      }
    });
    return toRender;
  }
  return (
    <ProductsContext.Provider value={{ "BMW_i3": BMW_i3, "BMW_i8": BMW_i8 }}>
      <TotalContext.Provider value={props}>
        <form>
          <Suspense fallback={<>No component</>}>
            {renderSection()}
          </Suspense>
        </form>
      </TotalContext.Provider>
    </ProductsContext.Provider>
  )
};
export default SectionsSwitcher;