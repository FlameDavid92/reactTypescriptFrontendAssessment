export interface Section {
    id: number,
    name: string,
    path: string,
    component: React.FC
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
	name: string,
	startingPrice : Price,
	colors: Array<string>,
	images: Array<string>,
	accessories: Array<Accessory>
}