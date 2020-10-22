import {Auto} from '../model/interfaces';

/*L'array images e colors devono avere la stessa lunghezza, poiché ad ogni indice in colors 
deve corrispondere un'immagine relativa a quel colore allo stesso indice in images.*/
export const BMW_i3 : Auto =
{
    id: 1,
	name: "BMW i3",
	startingPrice : {value:42400,currency:"$"},
    colors: [
        {color:"energy white", price: {value:0,currency:"$"}},
        {color:"classic blue", price: {value:2500,currency:"$"}},
        {color:"living coral", price:{value:5000,currency:"$"}}
        ],
    images: ["./images/bmw_i3-white-min.png","./images/bmw_i3-classic-blue-min.png","./images/bmw_i3-living-coral-min.png"],
    accessories: [
        { name:"Park Distance Control (PDC)", price: { value:420,currency:"$"} },
        { name:"Heated front seats", price: { value:400,currency:"$"} },
        { name:"Anti-theft with acoustic alarm", price: { value:650,currency:"$"} }
		]
}
export const BMW_i8 : Auto =
{
    id: 2,
	name: "BMW i8",
    startingPrice : {value:140700,currency:"$"},
    colors: [
        {color:"frozen black", price: {value:0,currency:"$"}},
        {color:"imperial blue", price: {value:6000,currency:"$"}}
        ],
    images: ["./images/bmw_i8-frozen-black-min.png","./images/bmw_i8-imperial-blue-min.png"],
	accessories: [
        { name:"Harman Kardon Speaker System", price: { value:950,currency:"$"} },
        { name:"Park Distance Control (PDC)", price: { value:420,currency:"$"} },
        { name:"Heated front seats", price: { value:400,currency:"$"} },
        { name:"Anti-theft with acoustic alarm", price: { value:650,currency:"$"} }
        ]
}