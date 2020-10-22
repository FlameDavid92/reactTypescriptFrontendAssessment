import React, { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";
import sections from '../../utils/sections';
import { ProductsContext, BMW_i3, BMW_i8 } from '../../utils/products';
import {SwitcherProps, TotalContext} from '../../utils/sections-utils';

const SectionsSwitcher: FC<SwitcherProps> = (props) => {
  const [section,setSection] = useState<any>(sections[0].name);
  const renderSection = () => {
    let toRender;
    sections.some(s => {
      if(section === s.name){
        toRender = s.component;
        return true;
      }
    });
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