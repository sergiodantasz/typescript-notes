class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getOrCreateDatabase(
    host: string,
    user: string,
    password: string
  ): Database {
    if (!this.database) {
      this.database = new Database(host, user, password);
    }
    return this.database;
  }
}

const db1 = Database.getOrCreateDatabase("localhost", "root", "123");
const db2 = Database.getOrCreateDatabase("localhost", "sérgio", "999");

db1.connect();
db2.connect();
