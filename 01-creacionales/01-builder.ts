/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = "CPU not defined";
  public ram: string = "RAM not defined";
  public storage: string = "Storage not defined";
  public gpu?: string;

  displayConfiguration() {
    console.log(`
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Almacenamiento: ${this.storage}
            GPU: ${this.gpu || "No GPU"}
        `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu: string) {
    this.computer.cpu = cpu;
    return this;
  }

  setRam(ram: string) {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string) {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string) {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
    const basicComputer = new ComputerBuilder()
    .setCpu("Intel Core i7")
    .setRam("16GB")
    .setStorage("1TB")
    .setGpu("NVIDIA GeForce RTX 3070")
    .build();
    
    console.log('%cBasic Computer', COLORS.blue);
    basicComputer.displayConfiguration();

  const computer = new ComputerBuilder()
    .setCpu("Intel Core i7")
    .setRam("32GB")
    .setStorage("1TB")
    .setGpu("NVIDIA GeForce RTX 4070")
    .build();

    console.log('%cBasic Computer', COLORS.cyan);
    computer.displayConfiguration();


}



main();
