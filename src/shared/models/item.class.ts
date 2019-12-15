export class Item {
  name: ItemName;
  price: number;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
export type ItemName = "Coke" | "Pepsi" | "Soda";
