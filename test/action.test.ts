import { describe, it, expect } from '@jest/globals';
import { ActionGenerator } from '../src/generators/action';

describe('ActionGenerator', () => {
  describe('koalaActions', () => {
    it('should return array of default length', () => {
      const actions = ActionGenerator.koalaActions();
      expect(Array.isArray(actions)).toBe(true);
      expect(actions.length).toBe(5);
    });

    it('should return specified number of actions', () => {
      const actions = ActionGenerator.koalaActions(3);
      expect(actions.length).toBe(3);
    });

    it('should return only strings', () => {
      const actions = ActionGenerator.koalaActions(5);
      actions.forEach(action => {
        expect(typeof action).toBe('string');
        expect(action.length).toBeGreaterThan(0);
      });
    });

    it('should return different actions on multiple calls', () => {
      const set1 = ActionGenerator.koalaActions(5);
      const set2 = ActionGenerator.koalaActions(5);
      expect(set1).not.toEqual(set2);
    });
  });
});