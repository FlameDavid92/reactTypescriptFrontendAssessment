export interface Section {
    id: number,
    name: string,
	component: React.ReactNode
}

export interface Price{
	value: number,
	currency: "$"|"€"
}

export interface Accessory {
	name : string,
	price : Price
}

export interface Auto {
	id: number,
	name: string,
	startingPrice : Price,
	colors: Array<string>,
	images: Array<string>,
	accessories: Array<Accessory>
}

export interface TotalContextProps{
    total: Price,
    setTotal: React.Dispatch<React.SetStateAction<Price>>
}

/*Nel context la chiave deve essere il name dell'oggetto!*/
export interface ProductsContextInterface{
    "BMW_i3": Auto,
    "BMW_i8": Auto
}