export const printPrice = (x:number) =>{
    return x.toString().replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}