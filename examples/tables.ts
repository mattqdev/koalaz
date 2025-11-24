// examples/tables.ts
/**
 * Table Generator Examples
 * Generate fake tabular data
 */

import Koala from '../src/index';
// Or for CommonJS:
// const Koala = require('../src/index');

console.log('🐨 KOALA TABLE GENERATOR\n');
console.log('='.repeat(50));

// 1. Small table
console.log('\n📊 1. Small table (3 rows):\n');
const smallTable = Koala.getTable(3);
printTable(smallTable);

// 2. Medium table
console.log('\n📊 2. Medium table (5 rows):\n');
const mediumTable = Koala.getTable(5);
printTable(mediumTable);

// 3. Large table
console.log('\n📊 3. Large table (10 rows):\n');
const largeTable = Koala.getTable(10);
printTable(largeTable);

// Helper function to print tables nicely
function printTable(table: (string | number)[][]) {
  const colWidths = table[0].map((_, colIndex) =>
    Math.max(...table.map(row => String(row[colIndex]).length))
  );

  table.forEach((row, rowIndex) => {
    const formattedRow = row
      .map((cell, colIndex) => String(cell).padEnd(colWidths[colIndex]))
      .join(' | ');
    console.log(formattedRow);
    
    if (rowIndex === 0) {
      console.log(colWidths.map(w => '-'.repeat(w)).join('-+-'));
    }
  });
}