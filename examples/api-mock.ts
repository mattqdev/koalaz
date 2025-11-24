// examples/api-mock.ts
/**
 * API Mock Examples
 * Generate fake API responses
 */

import Koala from '../src/index';
// Or for CommonJS:
// const Koala = require('../src/index');

console.log('🐨 KOALA API MOCK GENERATOR\n');
console.log('='.repeat(50));

// 1. Simple GET request
console.log('\n🌐 1. GET /api/koalas\n');
const getResponse = Koala.koalaAPI('/api/koalas');
console.log(JSON.stringify(getResponse, null, 2));

// 2. Specific endpoint
console.log('\n🌐 2. GET /api/koalas/sleeping\n');
const sleepingResponse = Koala.koalaAPI('/api/koalas/sleeping');
console.log(JSON.stringify(sleepingResponse, null, 2));

// 3. Multiple API calls
console.log('\n🌐 3. Multiple API calls:\n');
const endpoints = ['/api/koalas', '/api/eucalyptus', '/api/trees'];
endpoints.forEach(endpoint => {
  const response = Koala.koalaAPI(endpoint);
  console.log(`${endpoint}:`);
  console.log(`  Status: ${response.status}`);
  console.log(`  Message: ${response.message}`);
  console.log(`  Koalas Involved: ${response.metadata.koalasInvolved}`);
  console.log(`  Processing Time: ${response.metadata.processingTime}\n`);
});