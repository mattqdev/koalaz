// src/generators/text.ts
import { KOALA_SOUNDS } from '../constants/data';
import { RandomUtils } from '../utils/random';

export class TextGenerator {
  static getLoremIpsum(paragraphs: number = 3, sentencesPerParagraph: number = 5): string {
    let text = '';
    
    for (let p = 0; p < paragraphs; p++) {
      let paragraph = '';
      
      for (let s = 0; s < sentencesPerParagraph; s++) {
        const sentenceLength = RandomUtils.getRandomNumber(3, 10);
        const words: string[] = [];
        
        for (let w = 0; w < sentenceLength; w++) {
          words.push(RandomUtils.getRandomElement(KOALA_SOUNDS));
        }
        
        paragraph += words.join(' ') + '. ';
      }
      
      text += paragraph.trim() + '\n\n';
    }
    
    return text.trim();
  }
}