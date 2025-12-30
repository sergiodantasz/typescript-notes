class Cart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    products.forEach((product) => {
      this.products.push(product);
    });
  }

  get productsCount(): number {
    return this.products.length;
  }

  get totalValue(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  showProducts(): void {
    console.log("--- Cart Products ---");
    this.products.forEach((product) => {
      console.log(`- ${product.name} (R$ ${product.price.toFixed(2)})`);
    });
    console.log(`Total: R$ ${this.totalValue.toFixed(2)}`);
  }
}

class Product {
  constructor(public name: string, public price: number) {}
}

const cart = new Cart();

const p1 = new Product("miojo", 2.5);
const p2 = new Product("macarrão", 6.1);
const p3 = new Product("arroz", 5.9);
const p4 = new Product("feijão", 7.8);

cart.insertProducts(p1, p2, p3, p4);

cart.showProducts();
