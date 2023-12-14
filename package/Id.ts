
export default class Id {
    id: `${string}-${string}-${string}-${string}-${string}`

    constructor() {
        this.id = crypto.randomUUID();
    }
}