// examples/testing-helpers.ts
/**
 * Testing Helper Examples
 * Use koala data in unit tests
 */

import Koala from '../src/index';

console.log('🐨 KOALA PACKAGE - TESTING HELPERS\n');
console.log('='.repeat(50));

// Example 1: Generate test fixtures
console.log('\n🧪 1. Generate Test Fixtures:\n');
function createTestFixtures(count: number) {
  return Koala.generateKoalaData(count);
}

const fixtures = createTestFixtures(3);
console.log('Generated test fixtures:');
console.log(JSON.stringify(fixtures, null, 2));

// Example 2: Seed data for database tests
console.log('\n🗄️  2. Seed Data for Database:\n');
interface DatabaseRecord {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
}

function generateSeedData(count: number): DatabaseRecord[] {
  return Array.from({ length: count }, () => {
    const koala = Koala.generateKoalaData(1) as any;
    return {
      id: koala.id,
      name: koala.name,
      email: Koala.koalaEmail(),
      age: koala.age,
      createdAt: new Date().toISOString()
    };
  });
}

const seedData = generateSeedData(5);
console.log(JSON.stringify(seedData, null, 2));

// Example 3: Mock API responses for integration tests
console.log('\n🔌 3. Mock API Response Factory:\n');
function createMockResponse(endpoint: string, success: boolean = true) {
  if (success) {
    return Koala.koalaAPI(endpoint);
  } else {
    return {
      status: 404,
      endpoint,
      timestamp: new Date().toISOString(),
      error: 'Koala not found',
      koalaApproved: false
    };
  }
}

console.log('Success response:');
console.log(JSON.stringify(createMockResponse('/api/test', true), null, 2));
