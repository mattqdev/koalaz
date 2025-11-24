// examples/lorem-ipsum.ts
/**
 * Lorem Ipsum Generator Examples
 * Generate placeholder text using koala sounds
 */

import Koala from '../src/index';
// Or for CommonJS:
// const Koala = require('../src/index');

console.log('🐨 KOALA IPSUM - TEXT PLACEHOLDER EXAMPLES\n');
console.log('='.repeat(50));

// 1. Short lorem ipsum
console.log('\n📝 1. Short lorem ipsum (1 paragraph, 3 sentences):\n');
console.log(Koala.getLoremIpsum(1, 3));

// 2. Medium lorem ipsum
console.log('\n📝 2. Medium lorem ipsum (2 paragraphs, 5 sentences):\n');
console.log(Koala.getLoremIpsum(2, 5));

// 3. Long lorem ipsum
console.log('\n📝 3. Long lorem ipsum (3 paragraphs, 7 sentences):\n');
console.log(Koala.getLoremIpsum(3, 7));

// 4. Use in HTML mockup
console.log('\n📝 4. HTML mockup example:\n');
const htmlExample = `
<article>
  <h1>The Life of Koalas</h1>
  <p>${Koala.getLoremIpsum(1, 4)}</p>
  <p>${Koala.getLoremIpsum(1, 4)}</p>
</article>
`;
console.log(htmlExample);