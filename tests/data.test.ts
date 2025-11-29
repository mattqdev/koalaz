import { describe, it, expect } from '@jest/globals';
import { DataGenerator } from '../src/generators/data';
import { KoalaData } from '../src/types';
import { KOALA_MOODS } from '../src/constants/data';

describe('DataGenerator', () => {
  describe('generateKoalaData', () => {
    it('should generate a single koala when count is 1', () => {
      const result = DataGenerator.generateJSONData(1);
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('sleepHours');
    });

    it('should generate an array of koalas when count > 1', () => {
      const result = DataGenerator.generateJSONData(5);
      expect(Array.isArray(result)).toBe(true);
      expect((result as KoalaData[]).length).toBe(5);
    });

    it('should generate valid koala IDs', () => {
      const koala = DataGenerator.generateJSONData(1) as KoalaData;
      expect(koala.id).toMatch(/^KOALA-\d+$/);
    });

    it('should generate sleep hours between 18 and 22', () => {
      const koala = DataGenerator.generateJSONData(1) as KoalaData;
      expect(koala.sleepHours).toBeGreaterThanOrEqual(18);
      expect(koala.sleepHours).toBeLessThanOrEqual(22);
    });

    it('should generate valid mood values', () => {
      const koala = DataGenerator.generateJSONData(1) as KoalaData;
      expect(KOALA_MOODS).toContain(koala.mood);
    });

    it('should generate tree loyalty percentage', () => {
      const koala = DataGenerator.generateJSONData(1) as KoalaData;
      expect(koala.treeLoyalty).toMatch(/^\d+%$/);
      const percentage = parseInt(koala.treeLoyalty);
      expect(percentage).toBeGreaterThanOrEqual(80);
      expect(percentage).toBeLessThanOrEqual(100);
    });
  });

  describe('koalaName', () => {
    it('should return a string', () => {
      const name = DataGenerator.getName();
      expect(typeof name).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });

    it('should return different names on multiple calls', () => {
      const names = new Set();
      for (let i = 0; i < 20; i++) {
        names.add(DataGenerator.getName());
      }
      expect(names.size).toBeGreaterThan(1);
    });
  });

  describe('koalaFact', () => {
    it('should return a string', () => {
      const fact = DataGenerator.getFact();
      expect(typeof fact).toBe('string');
      expect(fact.length).toBeGreaterThan(0);
    });
  });
});