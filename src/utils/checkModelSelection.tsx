export function check(){
    let check = localStorage.getItem("models");
    if(check) return true;
    else return false;
}