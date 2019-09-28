export class SumClass {
    private n1:number;
    private n2:number;
    constructor(n1:number, n2:number) {
        this.n1 = n1;
        this.n2 = n2;
    }

    sumTheValue():number {
        return this.n1 + this.n2;
    }

    multiplyAnother(n1:number, n2:number):number {
        return n1*n2;
    }
}
let sumThisClass = new SumClass(7,8);
export let nFinal: number = sumThisClass.sumTheValue() + sumThisClass.multiplyAnother(2,5);
//console.log(nFinal);