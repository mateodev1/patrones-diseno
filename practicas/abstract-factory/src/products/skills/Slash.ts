import { Skill } from './Skill.ts';

export class Slash implements Skill{
  cast(): void {
    console.log('atacando con slash')
  }
}