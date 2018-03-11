export class Tag {
    public name: string;

    constructor(params = {}) {
        for (const [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    }
}
