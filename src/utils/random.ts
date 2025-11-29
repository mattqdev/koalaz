export class RandomUtils {
  static getRandomElement<T>(array: T[]): T {
    if (!array.length) {
      throw new Error('RandomUtils.getRandomElement cannot operate on an empty array.');
    }

    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  static getRandomNumber(min: number, max: number): number {
    const normalizedMin = Math.ceil(min);
    const normalizedMax = Math.floor(max);

    if (!Number.isFinite(normalizedMin) || !Number.isFinite(normalizedMax)) {
      throw new Error('RandomUtils.getRandomNumber received invalid bounds.');
    }

    const low = normalizedMin <= normalizedMax ? normalizedMin : normalizedMax;
    const high = normalizedMin <= normalizedMax ? normalizedMax : normalizedMin;

    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  static getBiasedNumber(min: number, max: number): number {
    // Koalas are slow, bias towards lower numbers
    const random = Math.random();
    const biased = Math.pow(random, 1.5);
    return Math.floor(biased * (max - min + 1)) + min;
  }

  static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = RandomUtils.getRandomNumber(0, i);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}