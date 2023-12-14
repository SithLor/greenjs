export function toBool(arg:number){
    switch(arg){
        case 0:
            return false;
        case 1:
            return true;
        default:
            throw new Error(`Cannot convert ${arg} to boolean`)
    }
}
export function ToInt(arg:boolean){
    switch(arg){
        case false:
            return 0;
        case true:
            return 1;
        default:
            throw new Error(`Cannot convert ${arg} to number`)
    }
}
