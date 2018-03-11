export class Notify {
    msg: string; 
    type: string;

    constructor(msg: string = '', type: string = 'alert') {
        this.msg = msg;
        this.type = type;
    }
}
