import React from "react";
import {Auto} from './interfaces';

/*L'array images e colors devono avere la stessa lunghezza, poiché ad ogni indice in colors 
deve corrispondere un'immagine relativa a quel colore allo stesso indice in images.*/
export const BMW_i3 : Auto =
{
	name: "BMW i3",
	startingPrice : {value:42400,currency:"$"},
    colors: ["energy white","classic blue","living coral"],
    images: ["./images/bmw_i3-white-min.png","./images/bmw_i3-classic-blue-min.png","./images/bmw_i3-living-coral-min.png"],
    accessories: [
        { name:"Park Distance Control (PDC)", price: { value:420,currency:"$"} },
        { name:"Heated front seats", price: { value:400,currency:"$"} },
        { name:"Anti-theft with acoustic alarm", price: { value:650,currency:"$"} }
		]
}
export const BMW_i8 : Auto =
{
	name: "BMW i8",
	startingPrice : {value:140700,currency:"$"},
    colors: ["frozen black","imperial blue"],
    images: ["./images/bmw_i8-frozen-black-min.png","./images/bmw_i8-imperial-blue-min.png"],
	accessories: [
        { name:"Harman Kardon Speaker System", price: { value:950,currency:"$"} },
        { name:"Park Distance Control (PDC)", price: { value:420,currency:"$"} },
        { name:"Heated front seats", price: { value:400,currency:"$"} },
        { name:"Anti-theft with acoustic alarm", price: { value:650,currency:"$"} }
        ]
}

/*Nel context la chiave deve essere il name dell'oggetto!*/
interface ProductsContextInterface{
    "BMW_i3": Auto,
    "BMW_i8": Auto
}
export const ProductsContext = React.createContext<ProductsContextInterface|null>(null);