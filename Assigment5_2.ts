export {};

class Book {
    public readonly isbn: string;
    public title: string;
    private _author: string;
    private _price: number;
    private _stock: number;

    constructor(isbn: string, title: string, author: string, price: number, stock: number = 0) {
        this.isbn = isbn;
        this.title = title;
        this._author = author;
        this._price = price;
        this._stock = stock;
    }
    get author(): string {
        return this._author;
    }
    set author(value: string) {
        if (value !== "") {
            this._author = value;
        } else {
            console.log("Error: Author cannot be empty.");
        }
    }
    get price(): number {
        return this._price;
    }
    set price(value: number) {
        if (value < 0) {
            console.log("Error: Price cannot be negative.");
        } else {
            this._price = value;
        }
    }
    get stock(): number {
        return this._stock;
    }
    set stock(value: number) {
        if (value >= 0 && Number.isInteger(value)) {
            this._stock = value;
        } else {
            console.log("Error: Stock must be a non-negative integer.");
        }
    }
    get isAvailable(): boolean {
        return this._stock > 0;
    }
    public purchase(amount: number): void {
        if (amount > this._stock) {
            console.log(`Insufficient stock for ${this.title}. Current stock: ${this._stock}`);
        } else {
            this._stock = this._stock - amount;
        }
    }
    public getDiscountedPrice(percentage: number): string {
        const discountedPrice = this._price * (1 - percentage / 100);
        return `Discounted Price: $${discountedPrice.toFixed(2)}`;
    }
}
const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 45, 10);
console.log(`สร้างหนังสือ: ${book1.title} โดย ${book1.author} ราคา $${book1.price} สต็อก ${book1.stock} เล่ม`);
book1.price = -10;
console.log(`ราคาปัจจุบันหลังลองตั้ง -10: $${book1.price}`);   
book1.purchase(15);
console.log(`สต็อกหลังลองซื้อ 15 เล่ม: ${book1.stock}`);      
book1.purchase(10);
console.log(`สต็อกหลังซื้อ 10 เล่ม: ${book1.stock}`);
console.log(`หนังสือพร้อมให้ยืมไหม: ${book1.isAvailable}`);     
console.log(book1.getDiscountedPrice(20));