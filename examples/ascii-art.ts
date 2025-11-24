// examples/ascii-art.ts
/**
 * ASCII Art Examples
 * Display different koala art variants
 */

import Koala from '../src/index';

console.log('🐨 KOALA ASCII ART GALLERY\n');
console.log('='.repeat(50));

// 1. Classic koala
console.log('\n🎨 1. Classic Koala:');
console.log(Koala.koalaArt('classic'));

// 2. Sleeping koala
console.log('\n😴 2. Sleeping Koala:');
console.log(Koala.koalaArt('sleeping'));

// 3. Judging koala
console.log('\n🤨 3. Judging Koala:');
console.log(Koala.koalaArt('judging'));

// 4. Party koala
console.log('\n🎉 4. Party Koala:');
console.log(Koala.koalaArt('party'));

// 5. Error koala
console.log('\n❌ 5. Error Koala:');
console.log(Koala.koalaArt('error'));

// 6. Random art selector
console.log('\n🎲 6. Random Koala Art:');
const variants = ['classic', 'sleeping', 'judging', 'party', 'error'] as const;
const randomVariant = variants[Math.floor(Math.random() * variants.length)];
console.log(Koala.koalaArt(randomVariant));
