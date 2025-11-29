import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const EXAMPLES_DIR = __dirname;
const SEPARATOR = '='.repeat(80);

console.log('🐨 RUNNING ALL KOALA EXAMPLES\n');
console.log(SEPARATOR);

// Get all .ts files except run-all.ts
const exampleFiles = fs.readdirSync(EXAMPLES_DIR)
  .filter(file => file.endsWith('.ts') && file !== 'run-all.ts')
  .sort();

console.log(`\nFound ${exampleFiles.length} examples to run:\n`);
exampleFiles.forEach((file, i) => {
  console.log(`  ${i + 1}. ${file}`);
});
console.log('\n' + SEPARATOR + '\n');

// Run each example
exampleFiles.forEach((file, index) => {
  const fileName = path.basename(file, '.ts');
  const filePath = path.join(EXAMPLES_DIR, file);
  
  console.log(`\n${'='.repeat(80)}`);
  console.log(`🐨 [${index + 1}/${exampleFiles.length}] Running: ${fileName}`);
  console.log('='.repeat(80) + '\n');
  
  try {
    execSync(`npx ts-node "${filePath}"`, { 
      stdio: 'inherit',
      cwd: path.join(EXAMPLES_DIR, '..')
    });
  } catch (error) {
    console.error(`\n❌ Error in ${file}:`, error);
  }
  
  // Small delay between examples
  if (index < exampleFiles.length - 1) {
    console.log('\n⏳ Pausing before next example...\n');
    execSync('sleep 1');
  }
});

console.log('\n' + SEPARATOR);
console.log('🎉 All examples completed!');
console.log(SEPARATOR);