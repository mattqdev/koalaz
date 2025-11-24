import { describe, it, expect } from '@jest/globals';
import { MiscGenerator } from '../src/generators/misc';

describe('MiscGenerator', () => {
  describe('koalaColor', () => {
    it('should return valid hex color', () => {
      const color = MiscGenerator.koalaColor();
      expect(color).toMatch(/^#[0-9A-F]{6}$/i);
    });
  });

  describe('koalaEmail', () => {
    it('should return valid email format', () => {
      const email = MiscGenerator.koalaEmail();
      expect(email).toMatch(/^[a-z.]+@[a-z.]+$/);
    });

    it('should use koala domains', () => {
      const email = MiscGenerator.koalaEmail();
      const domains = ['koala.au', 'eucalyptus.tree', 'sleepy.land', 'marsupial.inc'];
      const domain = email.split('@')[1];
      expect(domains).toContain(domain);
    });
  });

  describe('koalaPassword', () => {
    it('should return a string', () => {
      const password = MiscGenerator.koalaPassword();
      expect(typeof password).toBe('string');
      expect(password.length).toBeGreaterThan(0);
    });
  });

  describe('koalaDelay', () => {
    it('should delay for specified time', async () => {
      const start = Date.now();
      await MiscGenerator.koalaDelay(100);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(95);
      expect(elapsed).toBeLessThan(150);
    });

    it('should use random delay when no time specified', async () => {
      const start = Date.now();
      await MiscGenerator.koalaDelay();
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(0);
    });
  });

  describe('koalaNumber', () => {
    it('should return number in specified range', () => {
      for (let i = 0; i < 100; i++) {
        const num = MiscGenerator.koalaNumber(10, 20);
        expect(num).toBeGreaterThanOrEqual(10);
        expect(num).toBeLessThanOrEqual(20);
      }
    });

    it('should bias towards lower numbers', () => {
      const numbers: number[] = [];
      for (let i = 0; i < 1000; i++) {
        numbers.push(MiscGenerator.koalaNumber(0, 100));
      }
      const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
      expect(average).toBeLessThan(50); // Should be biased towards lower half
    });
  });
});