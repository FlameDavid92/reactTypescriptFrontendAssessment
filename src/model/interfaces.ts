export interface Section {
    id: number,
    name: string,
	component: React.ReactNode
}

export interface Price{
	value: number,
	currency: "$"|"€"
}

export interface PricedColor{
	color: string,
	price: Price
}

export interface Accessory {
	name : string,
	image: string,
	price : Price
}

export interface Auto {
	id: number,
	name: string,
	startingPrice : Price,
	colors: Array<PricedColor>,
	images: Array<string>,
	accessories: Array<Accessory>
}

export interface TotalContextProps{
    total: Price,
    setTotal: React.Dispatch<React.SetStateAction<Price>>
}

export interface ProductsContextInterface{
	data: Array<Auto>
}