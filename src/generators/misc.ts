// src/generators/misc.ts
import { KOALA_COLORS, KOALA_PASSWORDS, KOALA_DOMAINS } from '../constants/data';
import { DataGenerator } from './data';
import { RandomUtils } from '../utils/random';

export class MiscGenerator {
  static koalaColor(): string {
    return RandomUtils.getRandomElement(KOALA_COLORS);
  }

  static koalaEmail(): string {
    const name = DataGenerator.koalaName().toLowerCase().replace(/ /g, '.');
    const domain = RandomUtils.getRandomElement(KOALA_DOMAINS);
    return `${name}@${domain}`;
  }

  static koalaPassword(): string {
    return RandomUtils.getRandomElement(KOALA_PASSWORDS);
  }

  static async koalaDelay(ms?: number): Promise<void> {
    const delay = ms || RandomUtils.getBiasedNumber(100, 3000);
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  static koalaNumber(min: number = 0, max: number = 100): number {
    return RandomUtils.getBiasedNumber(min, max);
  }
}