import { Weapon } from "./weapon.ts";

export class Arch implements Weapon {
  use(): void {
    console.log('usando arco')
  }
}