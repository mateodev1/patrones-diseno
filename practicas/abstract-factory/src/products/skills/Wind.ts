import { Skill } from './Skill.ts';

export class Wind implements Skill{
  cast(): void {
    console.log('atacando con viento')
  }
}