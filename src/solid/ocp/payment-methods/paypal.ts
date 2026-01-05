import type { PaymentMethod } from "../interfaces/payment-method";

export class PayPalPayment implements PaymentMethod {
  constructor(private email: string) {}

  processPayment(amount: number): void {
    console.log(`Processing PayPal payment for ${this.email}`);
  }

  get methodName(): string {
    return "PayPal";
  }
}
