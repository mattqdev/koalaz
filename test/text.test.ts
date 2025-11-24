import { describe, it, expect } from '@jest/globals';
import { TextGenerator } from '../src/generators/text';

describe('TextGenerator', () => {
  describe('koalaIpsum', () => {
    it('should generate text with default parameters', () => {
      const text = TextGenerator.koalaIpsum();
      expect(typeof text).toBe('string');
      expect(text.length).toBeGreaterThan(0);
    });

    it('should generate specified number of paragraphs', () => {
      const text = TextGenerator.koalaIpsum(3);
      const paragraphs = text.split('\n\n');
      expect(paragraphs.length).toBe(3);
    });

    it('should generate approximately correct number of sentences', () => {
      const text = TextGenerator.koalaIpsum(1, 5);
      const sentences = text.split('. ').filter(s => s.length > 0);
      expect(sentences.length).toBeGreaterThanOrEqual(4);
      expect(sentences.length).toBeLessThanOrEqual(6);
    });

    it('should only contain koala sounds', () => {
      const text = TextGenerator.koalaIpsum(2, 3);
      const koalaSounds = ['WAAAAH', 'grrrumph', 'snort', 'wheeze', 'belch', 
                          'grunt', 'squeak', 'moan', 'sigh', 'eucalyptus', 
                          'zzzzz', 'munch'];
      
      const words = text.replace(/\./g, '').split(/\s+/);
      words.forEach(word => {
        expect(koalaSounds).toContain(word);
      });
    });
  });
});