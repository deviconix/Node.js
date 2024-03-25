export class Log {
    constructor(arr = []) {
        this.datas = arr;
    }

    add(mess) {
        this.datas.push(mess);
    }

    view() {
        console.log('--------------- LOG START -------------');
        this.datas.forEach(item => {
            console.log('Warning: file existets and not rewrite', item);
        });
        console.log('---------------- LOG END --------------');
    }
}