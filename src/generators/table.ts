// src/generators/table.ts
import { KOALA_NAMES } from '../constants/data';
import { RandomUtils } from '../utils/random';

export class TableGenerator {
  static koalaTable(rows: number = 5): (string | number)[][] {
    const headers = ['ID', 'Name', 'Sleep Hours', 'Eucalyptus (g)', 'Mood', 'Tree'];
    const table: (string | number)[][] = [headers];
    const moods = ['😴', '😐', '🙄', '😑'];
    
    for (let i = 0; i < rows; i++) {
      table.push([
        `K${RandomUtils.getRandomNumber(0, 999)}`,
        RandomUtils.getRandomElement(KOALA_NAMES),
        `${RandomUtils.getBiasedNumber(18, 22)}h`,
        `${RandomUtils.getBiasedNumber(200, 1000)}g`,
        RandomUtils.getRandomElement(moods),
        `Eucalyptus #${RandomUtils.getRandomNumber(0, 100)}`
      ]);
    }
    
    return table;
  }
}