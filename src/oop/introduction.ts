class Enterprise {
  /*
  public: accessible from anywhere (inside and outside the class, and in subclasses)
  protected: accessible from inside the class and in subclasses
  private: accessible only inside the class
  */
  public readonly name: string;
  readonly startYear = 2025; // public is redundant
  protected readonly workers: Worker[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addWorker(worker: Worker): void {
    this.workers.push(worker);
  }

  showWorkers(): void {
    console.log(`--- ${this.name}'s workers ---`);
    this.workers.forEach((worker, index) => {
      console.log(`${index + 1} - ${worker.fullname}`);
    });
  }
}

class Worker {
  // it's not needed to set this.prop = prop
  constructor(public readonly name: string, readonly surname: string) {}

  public get fullname(): string {
    return `${this.name} ${this.surname}`;
  }
}

const e1 = new Enterprise("facebook", "11.111.111/0001-11");

const w1 = new Worker("sérgio", "dantas");
const w2 = new Worker("jorge", "almeida");
const w3 = new Worker("laiane", "fernandes");

e1.addWorker(w1);
e1.addWorker(w2);
e1.addWorker(w3);
// scructural typing
e1.addWorker({
  name: "isabela",
  surname: "vitória",
  get fullname() {
    return `${this.name} ${this.surname}`;
  },
});

e1.showWorkers();

class Udemy extends Enterprise {
  constructor() {
    super("udemy", "11.111.111/0001-11");
  }

  popWorker(): Worker | null {
    const removedWorker = this.workers.pop();
    if (!removedWorker) return null;
    return removedWorker;
  }
}

const e2 = new Udemy();

const removedWorker = e2.popWorker();
