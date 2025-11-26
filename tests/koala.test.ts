import { describe, it, expect } from '@jest/globals';
import Koala from '../src/index';

describe('Koala Main Class', () => {
  it('should have all expected methods', () => {
    expect(typeof Koala.generateJSONData).toBe('function');
    expect(typeof Koala.getName).toBe('function');
    expect(typeof Koala.getFact).toBe('function');
    expect(typeof Koala.getLoremIpsum).toBe('function');
    expect(typeof Koala.getArt).toBe('function');
    expect(typeof Koala.getActions).toBe('function');
    expect(typeof Koala.getTable).toBe('function');
    expect(typeof Koala.getAPI).toBe('function');
    expect(typeof Koala.getColor).toBe('function');
    expect(typeof Koala.getEmail).toBe('function');
    expect(typeof Koala.getPassword).toBe('function');
    expect(typeof Koala.getDelay).toBe('function');
    expect(typeof Koala.getNumber).toBe('function');
  });

  it('should work as unified interface', () => {
    const koala = Koala.generateJSONData(1);
    expect(koala).toHaveProperty('id');
    
    const name = Koala.getName();
    expect(typeof name).toBe('string');
    
    const art = Koala.getArt();
    expect(art).toContain('ʕ');
  });
});