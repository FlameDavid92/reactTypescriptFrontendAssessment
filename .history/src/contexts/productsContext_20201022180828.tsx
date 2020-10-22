import React from "react"
import {Auto} from '../model/interfaces';
/*Nel context la chiave deve essere il name dell'oggetto!*/
interface ProductsContextInterface{
    "BMW_i3": Auto,
    "BMW_i8": Auto
}
export const ProductsContext = React.createContext<ProductsContextInterface|null>(null);