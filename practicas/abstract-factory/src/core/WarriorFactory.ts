import { Skill } from "../../main.ts";
import { CharacterFactory } from "../character/01-GameCharacter.ts";
import { Armor } from "../character/Armor.ts";
import { IntermediateArmor } from "../products/armor/IntermediateArmor.ts";
import { Fireball } from "../products/Fireball.ts";
import { Sword } from "../products/weapon/Sword.ts";
import { Weapon } from "./weapon/weapon.ts";

export class WarriorFactory implements CharacterFactory {
  createWeapon(): Weapon {
    return new Sword()
  }
  createArmor(): Armor {
    return new IntermediateArmor()
  }
  createSkill(): Skill {
    return new Fireball()
  }
}