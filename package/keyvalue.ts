import Id from "./Id";


export default class KeyValue extends Id{
    data:[]
    constructor(){
        super();
        this.data = []
    }
    get(key:string){
        this.data[key]
    }
    set(key:string,value:any){
        this.data[key] = value;
    }
    delete(key:string){
        delete this.data[key]
    }
    clear(){
        this.data = []  
    }
    has(key:string){
        return this.data[key] ? true : false;
    }
}

