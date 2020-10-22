export interface Section {
    id: number,
    name: string,
    path: string,
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
	name: string,
	startingPrice : Price,
	colors: Array<string>,
	images: Array<string>,
	accessories: Array<Accessory>
}

export interface SwitcherProps{
	currentSectionId: number,
    total: Price,
	setTotal: React.Dispatch<React.SetStateAction<Price>>,
	sections: Array<Section>,
    nextSectionIndex: number,
    btnFooterClick: number,
    navBarClick: number,
    setNavBarClick: React.Dispatch<React.SetStateAction<number>>,
    setNextSection: React.Dispatch<React.SetStateAction<number>>
}

/*Nel context la chiave deve essere il name dell'oggetto!*/
export interface ProductsContextInterface{
    "BMW_i3": Auto,
    "BMW_i8": Auto
}