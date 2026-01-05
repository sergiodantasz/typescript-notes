import type { PaymentMethod } from "../interfaces/payment-method";

export class CreditCardPayment implements PaymentMethod {
  constructor(private cardNumber: string) {}

  processPayment(amount: number): void {
    console.log(`Charging card ending in ${this.cardNumber.slice(-4)}`);
  }

  get methodName(): string {
    return "Credit Card";
  }
}
