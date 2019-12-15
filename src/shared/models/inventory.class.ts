import { Injectable } from "@angular/core";

/**
 * An adapter design pattern to hold items information
 */
@Injectable()
export class Inventory<T> {
  inventory: Map<T, number> = new Map<T, number>();

  getAllItems(): T[] {
    const allItems = Array.from(this.inventory.keys());
    return allItems;
  }

  getQuantity(item: T): number {
    const value = this.inventory.get(item);
    return value ? value : 0;
  }

  add(item: T): void {
    const count = this.inventory.get(item);
    this.inventory.set(item, count + 1);
  }

  deduct(item: T): void {
    if (this.hasItem(item)) {
      const count = this.inventory.get(item);
      this.inventory.set(item, count - 1);
    }
  }

  hasItem(item: T): boolean {
    return this.getQuantity(item) > 0;
  }

  clear(): void {
    this.inventory.clear();
  }

  put(item: T, quantity: number): void {
    this.inventory.set(item, quantity);
  }
}
