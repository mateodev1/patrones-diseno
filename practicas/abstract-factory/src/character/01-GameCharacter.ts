import { Skill } from "../../main.ts";
import { Weapon } from "../core/weapon/weapon.ts";
import { Armor } from "./Armor.ts";

export interface CharacterFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
  createSkill(): Skill;
}