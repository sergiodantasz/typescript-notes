export interface PaymentMethod {
  processPayment(amount: number): void;
  get methodName(): string;
}
