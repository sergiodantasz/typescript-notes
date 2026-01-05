import type { Messenger } from "../services/messenger";
import type { OrderRepository } from "../services/order-repository";
import type { ShoppingCart } from "./shopping-cart";

export class Order {
  constructor(
    private cart: ShoppingCart,
    private messenger: Messenger,
    private repository: OrderRepository
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Cart is empty");
      return;
    }
    this.messenger.send(`Order total: $${this.cart.totalPrice.toFixed(2)}`);
    this.repository.save();
    this.cart.clear();
  }
}
