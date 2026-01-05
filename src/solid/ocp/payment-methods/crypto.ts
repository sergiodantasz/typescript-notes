import type { PaymentMethod } from "../interfaces/payment-method";

export class CryptoPayment implements PaymentMethod {
  constructor(private walletAddress: string) {}

  processPayment(amount: number): void {
    console.log(`Processing crypto payment from ${this.walletAddress}`);
  }

  get methodName(): string {
    return "Crypto";
  }
}
