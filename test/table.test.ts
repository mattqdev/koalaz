import { describe, it, expect } from '@jest/globals';
import { TableGenerator } from '../src/generators/table';

describe('TableGenerator', () => {
  describe('koalaTable', () => {
    it('should generate table with headers', () => {
      const table = TableGenerator.koalaTable(3);
      expect(table.length).toBe(4); // 3 rows + 1 header
      expect(table[0]).toEqual(['ID', 'Name', 'Sleep Hours', 'Eucalyptus (g)', 'Mood', 'Tree']);
    });

    it('should generate specified number of rows', () => {
      const table = TableGenerator.koalaTable(5);
      expect(table.length).toBe(6); // 5 rows + 1 header
    });

    it('should have correct number of columns', () => {
      const table = TableGenerator.koalaTable(3);
      table.forEach(row => {
        expect(row.length).toBe(6);
      });
    });

    it('should generate valid ID format', () => {
      const table = TableGenerator.koalaTable(5);
      for (let i = 1; i < table.length; i++) {
        expect(table[i][0]).toMatch(/^K\d+$/);
      }
    });

    it('should include emoji moods', () => {
      const table = TableGenerator.koalaTable(10);
      const validMoods = ['😴', '😐', '🙄', '😑'];
      for (let i = 1; i < table.length; i++) {
        expect(validMoods).toContain(table[i][4] as string);
      }
    });
  });
});