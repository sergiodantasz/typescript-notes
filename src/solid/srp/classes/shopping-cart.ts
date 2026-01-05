import { Item } from "./item";

export class ShoppingCart {
  private items: Item[] = [];

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }
}
