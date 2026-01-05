// Single Responsibility Principle (SRP)

// A class should have one and only one reason to change.
// This means that a class should have only one job.

import { Item } from "./classes/item";
import { Messenger } from "./services/messenger";
import { Order } from "./classes/order";
import { OrderRepository } from "./services/order-repository";
import { ShoppingCart } from "./classes/shopping-cart";

function main() {
  const cart = new ShoppingCart();
  const messenger = new Messenger();
  const repository = new OrderRepository();
  const order = new Order(cart, messenger, repository);

  cart.addItem(new Item("pencil", 1.1));
  cart.addItem(new Item("book", 52.9));
  cart.addItem(new Item("bag", 89.5));

  order.checkout();
}

main();
