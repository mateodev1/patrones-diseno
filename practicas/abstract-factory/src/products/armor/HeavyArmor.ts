import { Armor } from "../../character/Armor.ts";


export class HeavyArmor implements Armor {
  equip(): void {
    console.log('Armadura pesa equipada')
  }
}