//add super() to constructor
export default class Id {
    id: `${string}-${string}-${string}-${string}-${string}`

    constructor() {
        this.id = crypto.randomUUID();
    }
    toIdString(): `${string}-${string}-${string}-${string}-${string}`{
        return this.id;
    }
}
interface _Id {
    id: `${string}-${string}-${string}-${string}-${string}`
    toIdString(): `${string}-${string}-${string}-${string}-${string}`
}