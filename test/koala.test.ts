import { describe, it, expect } from '@jest/globals';
import Koala from '../src/index';

describe('Koala Main Class', () => {
  it('should have all expected methods', () => {
    expect(typeof Koala.generateKoalaData).toBe('function');
    expect(typeof Koala.koalaName).toBe('function');
    expect(typeof Koala.koalaFact).toBe('function');
    expect(typeof Koala.koalaIpsum).toBe('function');
    expect(typeof Koala.koalaArt).toBe('function');
    expect(typeof Koala.koalaActions).toBe('function');
    expect(typeof Koala.koalaTable).toBe('function');
    expect(typeof Koala.koalaAPI).toBe('function');
    expect(typeof Koala.koalaColor).toBe('function');
    expect(typeof Koala.koalaEmail).toBe('function');
    expect(typeof Koala.koalaPassword).toBe('function');
    expect(typeof Koala.koalaDelay).toBe('function');
    expect(typeof Koala.koalaNumber).toBe('function');
  });

  it('should work as unified interface', () => {
    const koala = Koala.generateKoalaData(1);
    expect(koala).toHaveProperty('id');
    
    const name = Koala.koalaName();
    expect(typeof name).toBe('string');
    
    const art = Koala.koalaArt();
    expect(art).toContain('ʕ');
  });
});