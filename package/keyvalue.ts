import Id from "./Id";

export class KeyValue extends Id {
    constructor(public key: string, public value: string) {
        super();
    }
    toString(): string {
        return `${this.key}=${this.value}`;
    }
    setKey(key: string): void {
        this.key = key;
    }
    setValue(value: string): void {
        this.value = value;
    }
    getKey(): string {
        return this.key;
    }

}