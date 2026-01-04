class Calculator {
  public num: number;

  constructor(num: number) {
    this.num = num;
  }

  add(n: number): this {
    this.num += n;
    return this;
  }

  sub(n: number): this {
    this.num -= n;
    return this;
  }

  div(n: number): this {
    this.num /= n;
    return this;
  }

  mul(n: number): this {
    this.num *= n;
    return this;
  }
}

class SubCalculator extends Calculator {
  pow(n: number): this {
    this.num **= n;
    return this;
  }
}

const calc = new SubCalculator(10);

const result = calc.add(5).mul(2).div(3).sub(1).pow(2).num;
console.log(result);

// builder

class RequestBuilder {
  private method: "GET" | "POST" | null = null;
  private url: string | null = null;

  setMethod(method: "GET" | "POST"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data to ${this.url} via ${this.method}.`);
  }
}

const request = new RequestBuilder();
request.setUrl("https://www.google.com").setMethod("GET").send();
