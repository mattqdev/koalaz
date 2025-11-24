// src/generators/action.ts
import { KOALA_ACTIONS } from '../constants/data';
import { RandomUtils } from '../utils/random';

export class ActionGenerator {
  static getActions(count: number = 5): string[] {
    const shuffled = RandomUtils.shuffleArray(KOALA_ACTIONS);
    return shuffled.slice(0, count);
  }
}