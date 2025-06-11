import { Armor } from "../../character/Armor.ts";


export class RobeArmor implements Armor {
  equip(): void {
    console.log('bata equipada equipada')
  }
}