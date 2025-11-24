// examples/colors-and-misc.ts
/**
 * Colors and Miscellaneous Examples
 * Colors, emails, passwords, delays, etc.
 */

import Koala from '../src/index';
// Or for CommonJS:
// const Koala = require('../src/index');

console.log('🐨 KOALA MISCELLANEOUS GENERATORS\n');
console.log('='.repeat(50));

// 1. Koala colors
console.log('\n🎨 1. Koala color palette:\n');
for (let i = 0; i < 10; i++) {
  const color = Koala.koalaColor();
  console.log(`  ${color}`);
}

// 2. Koala emails
console.log('\n📧 2. Koala email addresses:\n');
for (let i = 0; i < 8; i++) {
  console.log(`  ${Koala.koalaEmail()}`);
}

// 3. Koala passwords
console.log('\n🔐 3. Koala passwords (totally secure!):\n');
for (let i = 0; i < 5; i++) {
  console.log(`  ${Koala.koalaPassword()}`);
}

// 4. Koala delay demonstration
console.log('\n⏱️  4. Koala delay (async):\n');
async function delayDemo() {
  console.log('  Starting delay...');
  const start = Date.now();
  await Koala.koalaDelay(1000);
  const elapsed = Date.now() - start;
  console.log(`  Delayed for ${elapsed}ms (requested 1000ms)`);
  
  console.log('\n  Random delay...');
  const start2 = Date.now();
  await Koala.koalaDelay();
  const elapsed2 = Date.now() - start2;
  console.log(`  Delayed for ${elapsed2}ms (random koala speed)`);
}

delayDemo();