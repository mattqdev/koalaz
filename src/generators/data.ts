// src/generators/data.ts
import { KoalaData, KoalaMood } from '../types';
import { KOALA_NAMES, KOALA_ACTIONS, KOALA_FACTS } from '../constants/data';
import { RandomUtils } from '../utils/random';

export class DataGenerator {
  static generateJSONData(count: number = 1): KoalaData | KoalaData[] {
    const koalas: KoalaData[] = [];
    
    for (let i = 0; i < count; i++) {
      koalas.push(DataGenerator.createSingleKoala());
    }
    
    return count === 1 ? koalas[0] : koalas;
  }

  private static createSingleKoala(): KoalaData {
    const moods: KoalaMood[] = ['bored', 'sleepy', 'indifferent', 'slightly annoyed'];
    
    return {
      id: `KOALA-${RandomUtils.getRandomNumber(0, 9999)}`,
      name: RandomUtils.getRandomElement(KOALA_NAMES),
      age: RandomUtils.getBiasedNumber(1, 25),
      sleepHours: RandomUtils.getBiasedNumber(18, 22),
      eucalyptusConsumed: `${RandomUtils.getBiasedNumber(200, 1000)}g`,
      mood: RandomUtils.getRandomElement(moods),
      currentActivity: RandomUtils.getRandomElement(KOALA_ACTIONS),
      funFact: RandomUtils.getRandomElement(KOALA_FACTS),
      lastMoved: `${RandomUtils.getBiasedNumber(1, 72)} hours ago`,
      treeLoyalty: `${RandomUtils.getBiasedNumber(80, 100)}%`
    };
  }

  static getName(): string {
    return RandomUtils.getRandomElement(KOALA_NAMES);
  }

  static getFact(): string {
    return RandomUtils.getRandomElement(KOALA_FACTS);
  }
}