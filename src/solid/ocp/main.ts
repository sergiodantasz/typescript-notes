// Open/Closed Principle (OCP)

// Objects or entities should be open for extension but closed for modification.
// This means that a class should be extendable without modifying the class itself.

import { PaymentProcessor } from "./payment-processor";
import { CreditCardPayment } from "./payment-methods/credit-card";
import { PayPalPayment } from "./payment-methods/paypal";
import { CryptoPayment } from "./payment-methods/crypto";

function main() {
  const processor = new PaymentProcessor();

  processor.processPayment(new CreditCardPayment("1234567890123456"), 100);
  processor.processPayment(new PayPalPayment("user@example.com"), 50);
  processor.processPayment(new CryptoPayment("5hb23s8okwwdh1988dh27us"), 30);
}

main();
