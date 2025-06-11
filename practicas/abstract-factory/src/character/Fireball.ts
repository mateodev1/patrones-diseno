import { Skill } from './products/skills/Skill.ts';


export class Fireball implements Skill{
  cast(): void {
    console.log('atacando con fireball')
  }
}