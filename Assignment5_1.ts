export{};
class Wallet {
    private cash : number ;
    constructor(initaialCash : number){
        this.cash = initaialCash ;
    }
    public addCash(addCash : number){
       this.cash = addCash  + this.cash ;
    }
    public withdrawCash(withdrawCash : number){
        if(withdrawCash > this.cash){
            console.error("ยอดเงินคุณไม่เพียงพอต่อการถอนนะจ๊ะ")
        }else{
            this.cash= this.cash - withdrawCash ;
            console.log("ถอนเงินสำเร็จ");
        }
    }
}
class ATMUser {
    readonly accountNumber : string ;
    public wallet : Wallet ;
    constructor(a: string ,initialCash : number ){
        this.accountNumber = a,
        this.wallet = new Wallet (initialCash);
    }
}
const atm1 = new ATMUser("ACC-001", 5000);
console.log(`สร้างบัญชี: ${atm1.accountNumber} เริ่มต้นด้วยเงิน 5000`);   
atm1.wallet.withdrawCash(8000);