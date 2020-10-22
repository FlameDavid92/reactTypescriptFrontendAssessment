import React, { FC, useState } from "react";
import sections from '../../utils/sections';
import { ProductsContext, BMW_i3, BMW_i8 } from '../../utils/products';
import {SwitcherProps, TotalContext} from '../../utils/sections-utils';

const SectionsSwitcher: FC<SwitcherProps> = (props) => {
  const renderSection = () => {
    let toRender;
    sections.some(s => {
      if(section === props.currentSection){
        toRender = s.component;
        return true;
      }
    });
    console.log(toRender);
    return toRender;
  }
  return(
  <ProductsContext.Provider value={{ "BMW_i3": BMW_i3, "BMW_i8": BMW_i8 }}>
    <TotalContext.Provider value={props}>
      <form>
        {renderSection()}
      </form>
    </TotalContext.Provider>
  </ProductsContext.Provider>
)};
export default SectionsSwitcher;