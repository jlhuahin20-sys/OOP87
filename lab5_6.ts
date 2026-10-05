class Wallet {
  private _balance: number;

  constructor(intialBalance: number) {
    this._balance = intialBalance;
  }

  get formattedBalance() {
    return `$${this._balance}`;
  }
  set balance(newAmount: number) {
    if (newAmount < 0) {
      console.log("Error: Balance cannot be negative.");
      return;
    }
    this._balance = newAmount;
  }

  get balanceInTHB() {
    return this._balance * 33.5;
  }
}
const myWallet = new Wallet(150);

console.log(myWallet.formattedBalance); 
console.log(myWallet.balanceInTHB);      

myWallet.balance = 200;                  
console.log(myWallet.formattedBalance); 

myWallet.balance = -50;                  
console.log(myWallet.formattedBalance); 