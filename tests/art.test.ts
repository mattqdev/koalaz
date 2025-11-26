import { describe, it, expect } from '@jest/globals';
import { ArtGenerator } from '../src/generators/art';

describe('ArtGenerator', () => {
  describe('koalaArt', () => {
    it('should return classic art by default', () => {
      const art = ArtGenerator.getArt();
      expect(art).toContain('ʕ •ᴥ•ʔ');
      expect(art).toContain('KOALA');
    });

    it('should return sleeping variant', () => {
      const art = ArtGenerator.getArt('sleeping');
      expect(art).toContain('zzZ');
      expect(art).toContain('*sleeping*');
    });

    it('should return judging variant', () => {
      const art = ArtGenerator.getArt('judging');
      expect(art).toContain('ಠᴥಠ');
      expect(art).toContain('judging you');
    });

    it('should return party variant', () => {
      const art = ArtGenerator.getArt('party');
      expect(art).toContain('✨');
      expect(art).toContain('PARTY');
    });

    it('should return error variant', () => {
      const art = ArtGenerator.getArt('error');
      expect(art).toContain('404');
      expect(art).toContain('Not Found');
    });

    it('should return classic for invalid variant', () => {
      const art = ArtGenerator.getArt('invalid' as any);
      expect(art).toContain('KOALA');
    });
  });
});