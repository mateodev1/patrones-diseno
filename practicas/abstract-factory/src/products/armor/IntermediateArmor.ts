import { Armor } from "../../character/Armor.ts";


export class IntermediateArmor implements Armor {
  equip(): void {
    console.log('armadura intermedia equipada')
  }
}