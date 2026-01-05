import type { PaymentMethod } from "./interfaces/payment-method";

export class PaymentProcessor {
  processPayment(paymentMethod: PaymentMethod, amount: number): void {
    console.log(`Processing ${paymentMethod.methodName} payment: $${amount}`);
    paymentMethod.processPayment(amount);
  }
}
