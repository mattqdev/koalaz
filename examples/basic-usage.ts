// examples/basic-usage.ts
/**
 * Basic Usage Examples
 * Shows the most common use cases for the koala package
 */

import Koala from '../src/index';

console.log('🐨 KOALA PACKAGE - BASIC USAGE EXAMPLES\n');
console.log('='.repeat(50));

// 1. Generate a single koala
console.log('\n📋 1. Generate a single koala:\n');
const singleKoala = Koala.generateKoalaData(1);
console.log(JSON.stringify(singleKoala, null, 2));

// 2. Generate multiple koalas
console.log('\n📋 2. Generate multiple koalas:\n');
const multipleKoalas = Koala.generateKoalaData(3);
console.log(JSON.stringify(multipleKoalas, null, 2));

// 3. Generate koala names
console.log('\n🏷️  3. Generate random koala names:\n');
for (let i = 0; i < 5; i++) {
  console.log(`  - ${Koala.koalaName()}`);
}

// 4. Generate koala facts
console.log('\n💡 4. Random koala facts:\n');
for (let i = 0; i < 3; i++) {
  console.log(`  • ${Koala.koalaFact()}`);
}

// 5. Generate koala actions
console.log('\n🎭 5. What are koalas doing?\n');
const actions = Koala.koalaActions(5);
actions.forEach((action, i) => {
  console.log(`  ${i + 1}. ${action}`);
});

// 6. Koala numbers (biased towards lower values)
console.log('\n🔢 6. Koala numbers (slow and lazy like them):\n');
const numbers = Array.from({ length: 10 }, () => Koala.koalaNumber(0, 100));
console.log(`  Numbers: ${numbers.join(', ')}`);
console.log(`  Average: ${(numbers.reduce((a, b) => a + b) / numbers.length).toFixed(2)}`);
console.log('  (Notice the bias towards lower numbers!)');