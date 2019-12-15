import { Item } from "../models/item.class";
import { Coin } from "../models/coin.class";

export interface IVendingMachineImplementation {
  setSelectedItem(item: Item);
  insertCoin(coin: Coin);
  refund(): Coin[];
  collectItemAndChange();
  reset(): void;
}
