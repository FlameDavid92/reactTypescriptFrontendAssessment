import { TotalContextProps } from "../model/interfaces";

export function sync(totalObj: TotalContextProps | null){
    let startTot = localStorage.getItem("startingPrice");
    let colTot = localStorage.getItem("colorTotal");
    let accTot = localStorage.getItem("accessoriesTotal");
    if (startTot && colTot && accTot) {
        let parsed1 = JSON.parse(startTot);
        let parsed2 = JSON.parse(colTot);
        let parsed3 = JSON.parse(accTot);
        totalObj?.setTotal(t => { return { ...t, value: parsed1.value + parsed2.value + parsed3.value } });
    } else if (startTot && colTot) {
        let parsed1 = JSON.parse(startTot);
        let parsed2 = JSON.parse(colTot);
        totalObj?.setTotal(t => { return { ...t, value: parsed1.value + parsed2.value } });
    } else if (startTot) {
        let parsed1 = JSON.parse(startTot);
        totalObj?.setTotal(t => { return { ...t, value: parsed1.value } });
    }
}