import { Weapon } from "./weapon.ts";

export class Sword implements Weapon {
  use(): void {
      console.log('usando espada')
  }

}