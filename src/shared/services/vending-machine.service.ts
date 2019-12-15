import { Injectable } from "@angular/core";
import { Coin } from "../models/coin.class";
import { Item } from "../models/item.class";
import { Inventory } from "../models/inventory.class";
import { Bucket } from "../models/bucket.class";
import { IVendingMachineImplementation } from "../interfaces/vending-machine.interface";

enum CoinWorth {
  TENCENT = 0.1,
  TWENTYCENT = 0.2,
  FIFTYCENT = 0.5,
  ONEEURO = 1.0,
  TWOEURO = 2.0
}

//todo add all items
export const COINS_TO_INITIALIZE: Coin[] = [
  { coinValue: 0.1 },
  { coinValue: 0.2 },
  { coinValue: 0.5 },
  { coinValue: 1.0 },
  { coinValue: 2.0 }
];
export const ITEMS_TO_INITIALIZE: Item[] = [
  { name: "Coke", price: 0.2 },
  { name: "Pepsi", price: 1.1 },
  { name: "Soda", price: 3.4 }
];
@Injectable()
export class VendingMachineService implements IVendingMachineImplementation {
  cashInventory: Inventory<Coin> = new Inventory<Coin>();
  itemInventory: Inventory<Item> = new Inventory<Item>();
  totalSales: number;
  currentItem: Item;
  currentBalance: number;
  constructor() {
    this.initialize();
    this.currentBalance = 0;
    this.currentItem = null;
  }

  initialize(): void {
    COINS_TO_INITIALIZE.forEach(element => {
      this.cashInventory.put(element, 10);
    });
    ITEMS_TO_INITIALIZE.forEach(element => {
      this.itemInventory.put(element, 10);
    });
  }

  setSelectedItem(item: Item): number {
    if (this.itemInventory.hasItem(item)) {
      this.currentItem = item;
      return this.currentItem.price;
    }
    alert("Sold out");
  }

  insertCoin(coin: Coin) {
    this.currentBalance = this.currentBalance + coin.coinValue;
    this.cashInventory.add(coin);
  }

  reset(): void {
    this.cashInventory.clear();
    this.itemInventory.clear();
    this.currentItem = null;
    this.totalSales = 0;
    this.currentBalance = 0;
  }

  collectItemAndChange(): Bucket<Item, Coin[]> {
    const item: Item = this.collectItem();
    this.totalSales = this.totalSales + this.currentItem.price;
    let change: Coin[] = this.collectChange();
    return new Bucket<Item, Coin[]>(item, change);
  }

  collectItem(): Item {
    if (this.isFullPaid()) {
      if (this.hasSufficientChange()) {
        this.itemInventory.deduct(this.currentItem);
        return this.currentItem;
      } else {
        alert("Insufficient balance");
      }
    }
    alert(
      "pay the remaining balance" +
        (this.currentItem.price - this.currentBalance)
    );
  }

  refund(): Coin[] {
    const refund: Coin[] = this.getChange(this.currentBalance);
    this.updateCashInventory(refund);
    this.currentBalance = 0;
    this.currentItem = null;
    return refund;
  }
  hasSufficientChangeForAmount(amount: number): boolean {
    let hasChange: boolean = true;
    try {
      this.getChange(amount);
    } catch (error) {
      hasChange = false;
    }
    return hasChange;
  }

  getChange(amount: number): Coin[] {
    const changes: Coin[] = [];
    if (amount > 0) {
      let balance: number = amount;

      while (balance > 0) {
        if (
          balance >= CoinWorth.TENCENT &&
          this.cashInventory.hasItem(COINS_TO_INITIALIZE[0])
        ) {
          changes.push(COINS_TO_INITIALIZE[0]);
          balance = balance - CoinWorth.TENCENT;
          balance = parseFloat(balance.toFixed(1));
          continue;
        } else if (
          balance >= CoinWorth.TWENTYCENT &&
          this.cashInventory.hasItem(COINS_TO_INITIALIZE[1])
        ) {
          changes.push(COINS_TO_INITIALIZE[1]);
          balance = parseFloat(balance.toFixed(1));
          balance = balance - CoinWorth.TWENTYCENT;
          continue;
        } else if (
          balance >= CoinWorth.FIFTYCENT &&
          this.cashInventory.hasItem(COINS_TO_INITIALIZE[2])
        ) {
          changes.push(COINS_TO_INITIALIZE[2]);
          balance = balance - CoinWorth.FIFTYCENT;
          balance = parseFloat(balance.toFixed(1));
          continue;
        } else if (
          balance >= CoinWorth.ONEEURO &&
          this.cashInventory.hasItem(COINS_TO_INITIALIZE[3])
        ) {
          changes.push(COINS_TO_INITIALIZE[3]);
          balance = balance - CoinWorth.ONEEURO;
          balance = parseFloat(balance.toFixed(1));
          continue;
        } else if (
          balance >= CoinWorth.TWOEURO &&
          this.cashInventory.hasItem(COINS_TO_INITIALIZE[4])
        ) {
          changes.push(COINS_TO_INITIALIZE[4]);
          balance = balance - CoinWorth.TWOEURO;
          balance = parseFloat(balance.toFixed(1));
          continue;
        } else {
          //TODO: throw error here to catch
          alert("NotSufficientChange,Please try another product");
          console.log("NotSufficientChange,Please try another product");
          break;
        }
      }
      return changes;
    }
  }

  private collectChange(): Coin[] {
    const changeAmount: number = this.currentBalance - this.currentItem.price;
    const change: Coin[] = this.getChange(changeAmount);
    if (change) {
      this.updateCashInventory(change);
    }
    this.currentBalance = 0;
    this.currentItem = null;
    return change;
  }

  private updateCashInventory(change: Coin[]): void {
    change.forEach(ele => {
      this.cashInventory.deduct(ele);
    });
  }

  private isFullPaid(): boolean {
    if (this.currentBalance >= this.currentItem.price) {
      return true;
    }
    return false;
  }

  private hasSufficientChange(): boolean {
    return this.hasSufficientChangeForAmount(
      this.currentBalance - this.currentItem.price
    );
  }

  //TODO: describe CRUD method also be implemented
}
