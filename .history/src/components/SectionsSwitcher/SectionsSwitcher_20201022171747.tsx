import React, { FC, Suspense, useState } from "react";
import sections from '../../data/sections';
import { ProductsContext, BMW_i3, BMW_i8 } from '../../data/products';
import { TotalContext } from "../../contexts/totalContext";
import { SwitcherProps } from '../../model/interfaces';

const SectionsSwitcher: FC<SwitcherProps> = (props) => {
  const renderSection = () => {
    let toRender;
    sections.some(s => {
      if (s.name === props.currentSection) {
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