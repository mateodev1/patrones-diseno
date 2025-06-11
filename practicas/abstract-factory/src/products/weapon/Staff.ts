import { Weapon } from "./weapon.ts";

export class Staff implements Weapon {
  use(): void {
    console.log('usando arma personal')
  }
}