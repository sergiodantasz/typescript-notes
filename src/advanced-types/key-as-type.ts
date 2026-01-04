type Veiculo = {
  marca: string;
  ano: number;
};

type Vehicle = {
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
  name: string;
};

const car: Vehicle = {
  brand: "ford",
  year: 2020,
  name: "ka",
};
