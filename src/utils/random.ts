export class RandomUtils {
  static getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getBiasedNumber(min: number, max: number): number {
    // Koalas are slow, bias towards lower numbers
    const random = Math.random();
    const biased = Math.pow(random, 1.5);
    return Math.floor(biased * (max - min + 1)) + min;
  }

  static shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => 0.5 - Math.random());
  }
}