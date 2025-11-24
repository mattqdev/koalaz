// examples/real-world-scenarios.ts
/**
 * Real World Scenarios
 * Practical examples of using koala in actual projects
 */

import Koala from '../src/index';
// Or for CommonJS:
// const Koala = require('../src/index');

console.log('🐨 KOALA PACKAGE - REAL WORLD SCENARIOS\n');
console.log('='.repeat(50));

// Scenario 1: Testing a user list UI
console.log('\n📱 Scenario 1: Mock User List for UI Testing\n');
interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  lastActive: string;
}

const mockUsers: User[] = Array.from({ length: 5 }, () => {
  const koala = Koala.generateJSONData(1) as any;
  return {
    id: koala.id,
    name: Koala.getName(),
    email: Koala.getEmail(),
    status: koala.mood,
    lastActive: koala.lastMoved
  };
});

console.log(JSON.stringify(mockUsers, null, 2));

// Scenario 2: Blog post placeholder
console.log('\n📝 Scenario 2: Blog Post Placeholder\n');
interface BlogPost {
  title: string;
  author: string;
  content: string;
  publishedAt: string;
  tags: string[];
}

const mockBlogPost: BlogPost = {
  title: `The Adventures of ${Koala.getName()}`,
  author: Koala.getName(),
  content: Koala.getLoremIpsum(3, 4),
  publishedAt: new Date().toISOString(),
  tags: Koala.getActions(3)
};

console.log(JSON.stringify(mockBlogPost, null, 2));

// Scenario 3: Dashboard statistics
console.log('\n📊 Scenario 3: Dashboard Statistics\n');
interface DashboardStats {
  totalKoalas: number;
  sleepingKoalas: number;
  activeKoalas: number;
  eucalyptusConsumed: string;
  averageSleepHours: number;
}

const stats: DashboardStats = {
  totalKoalas: Koala.getNumber(100, 500),
  sleepingKoalas: Koala.getNumber(80, 450),
  activeKoalas: Koala.getNumber(10, 50),
  eucalyptusConsumed: `${Koala.getNumber(5000, 15000)}kg`,
  averageSleepHours: Koala.getNumber(18, 22)
};

console.log(JSON.stringify(stats, null, 2));

// Scenario 4: Error messages with art
console.log('\n❌ Scenario 4: Friendly Error Messages\n');
function showError(errorCode: number, message: string) {
  console.log(Koala.getArt('error'));
  console.log(`Error ${errorCode}: ${message}\n`);
}

showError(404, 'Koala not found - probably sleeping');
showError(500, 'Server is taking a koala nap');

// Scenario 5: Loading states
console.log('\n⏳ Scenario 5: Simulating Loading States\n');
async function simulateLoading() {
  console.log('Loading koala data...');
  console.log(Koala.getArt('sleeping'));
  await Koala.getDelay(1500);
  console.log('Done! Here\'s your koala:\n');
  console.log(JSON.stringify(Koala.generateJSONData(1), null, 2));
}

simulateLoading();
