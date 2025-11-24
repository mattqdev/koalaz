// examples/run-all.ts
/**
 * Run All Examples
 * Execute all example files in sequence
 */

console.log('🐨 RUNNING ALL KOALA EXAMPLES\n');
console.log('='.repeat(80));
console.log('\nThis will demonstrate all features of the koala package!\n');

async function runAllExamples() {
  const examples = [
    'basic-usage',
    'lorem-ipsum', 
    'ascii-art',
    'tables',
    'api-mock',
    'colors-and-misc',
    'real-world-scenarios',
    'testing-helpers'
  ];

  for (const example of examples) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`🐨 ${example.toUpperCase().replace('-', ' ')}`);
    console.log('='.repeat(80));
    
    try {
      require(`./${example}`);
      await Koala.koalaDelay(500); // Small delay between examples
    } catch (error) {
      console.error(`Error running ${example}:`, error);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('🎉 All examples completed!');
  console.log('='.repeat(80));
}

// Uncomment to run all examples:
// runAllExamples();