# Contributing to Koalaz 🐨

First off, thank you for considering contributing to koalaz! It's people like you that make koalaz such a delightfully useless (but somehow useful) tool for developers everywhere.

## 🌿 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Making Changes](#-making-changes)
- [Coding Standards](#-coding-standards)
- [Testing Guidelines](#-testing-guidelines)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)
- [Adding New Features](#-adding-new-features)

## 🌟 Code of Conduct

This project follows a simple principle:

> **Be kind, be respectful, and remember we're all here to have fun with koalas!**

- Treat everyone with respect
- Welcome newcomers warmly
- Provide constructive feedback
- Keep discussions focused and productive
- Remember: it's a meme project, keep it light and fun! 🎉

## 🎯 How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the [existing issues](https://github.com/mattqdev/koalaz/issues) to avoid duplicates.

When creating a bug report:

1. **Use the bug report template**
2. **Be specific**: Include exact steps to reproduce
3. **Provide context**: Environment details, version numbers
4. **Show examples**: Code snippets, error messages
5. **Add screenshots**: If applicable

**Example of a good bug report:**
```markdown
## Bug Description
koalaEmail() generates invalid email addresses with double dots

## Steps to Reproduce
1. Call Koala.koalaEmail() multiple times
2. Observe some emails like "sir..dormington@koala.au"

## Expected Behavior
Email should have single dots: "sir.dormington@koala.au"

## Environment
- Node: v20.10.0
- Koalaz: v1.0.0
- OS: macOS 14.1
```

### Suggesting Enhancements ✨

Have an idea for a new koala generator or feature?

1. **Check existing issues** and discussions first
2. **Use the feature request template**
3. **Explain the use case**: Why is this useful?
4. **Keep it koala-themed**: Does it fit the project spirit?
5. **Provide examples**: Show how it would work

**What makes a good feature:**
- ✅ Useful for testing/mocking/prototyping
- ✅ Fits the koala theme (silly but functional)
- ✅ Simple to use
- ✅ Well-documented
- ❌ Too serious or "enterprise"
- ❌ Not related to koalas

### Improving Documentation 📚

Documentation improvements are always welcome!

- Fix typos or unclear explanations
- Add more examples
- Improve API documentation
- Translate documentation
- Add diagrams or visuals

## 🛠️ Development Setup

### Prerequisites

- **Node.js**
- **npm**
- **Git**

### Initial Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/koalaz.git
cd koalaz

# 3. Add upstream remote
git remote add upstream https://github.com/mattqdev/koalaz.git

# 4. Install dependencies
npm install

# 5. Build the project
npm run build

# 6. Run tests to verify setup
npm test
```

### Verify Your Setup

```bash
# All tests should pass
npm test

# Code should build without errors
npm run build

# Linting should pass
npm run lint

# Try running examples
npm run example --file=FILE_NAME_WITHOUT_TS_EXTENSION # Singular
npm run examples:all                                  # All at once
```

## 🔨 Making Changes

### 1. Make Your Changes

- Write clean, readable code
- Follow existing patterns
- Add comments for complex logic
- Keep functions small and focused

### 2. Add Tests

```bash
# Run tests as you develop
npm run test:watch

# Check coverage
npm run test:coverage
```

**Every new feature must include tests!**

### 3. Update Documentation

- Add JSDoc comments to new functions
- Update README.md if needed
- Add examples in `examples/` directory or update existing ones
- Update type definitions

### 5. Test Everything

```bash
# Run all tests
npm test

# Check lint
npm run lint

# Build project
npm run build

# Try examples
npm run examples:all
```

## 📝 Coding Standards

### TypeScript Style

```typescript
// ✅ GOOD: Clear, typed, documented
/**
 * Generates a random koala name from the predefined list
 * @returns A random koala name
 */
export class DataGenerator {
  static koalaName(): string {
    return RandomUtils.getRandomElement(KOALA_NAMES);
  }
}

// ❌ BAD: No types, no documentation
export class DataGenerator {
  static koalaName() {
    return names[Math.floor(Math.random() * names.length)];
  }
}
```

### Code Principles

1. **KISS (Keep It Simple, Silly)** - This is a koala project!
2. **DRY (Don't Repeat Yourself)** - Extract common logic
3. **Single Responsibility** - One class/function = one job
4. **Type Safety** - Use TypeScript features fully
5. **Readability** - Code is read more than written

### Naming Conventions

```typescript
// Classes: PascalCase
class DataGenerator {}

// Functions/Methods: camelCase
function generateKoalaData() {}

// Constants: SCREAMING_SNAKE_CASE
const KOALA_NAMES = [...];

// Types/Interfaces: PascalCase
interface KoalaData {}
type ArtVariant = 'classic' | 'sleeping';

// Variables: camelCase
const koalaCount = 5;
```

### File Organization

```typescript
// 1. Imports (grouped and sorted)
import { KoalaData } from '../types';
import { KOALA_NAMES } from '../constants/data';
import { RandomUtils } from '../utils/random';

// 2. Type definitions (if any)
type LocalType = string;

// 3. Constants (if any)
const DEFAULT_VALUE = 10;

// 4. Class/Function implementation
export class Generator {
  // Static methods first
  static publicMethod() {}
  
  // Private methods last
  private static privateMethod() {}
}

// 5. Helper functions (if any)
function helperFunction() {}
```

## 🧪 Testing Guidelines

### Test Structure

```typescript
import { describe, it, expect } from '@jest/globals';
import { DataGenerator } from '../src/generators/data';

describe('DataGenerator', () => {
  describe('koalaName', () => {
    it('should return a string', () => {
      const name = DataGenerator.koalaName();
      expect(typeof name).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });

    it('should return different names on multiple calls', () => {
      const names = new Set();
      for (let i = 0; i < 20; i++) {
        names.add(DataGenerator.koalaName());
      }
      expect(names.size).toBeGreaterThan(1);
    });
  });
});
```

### Test Best Practices

1. **AAA Pattern**: Arrange, Act, Assert
2. **Descriptive names**: `it('should generate valid email addresses')`
3. **One assertion per test** (when possible)
4. **Test edge cases**: Empty arrays, null, undefined, negative numbers
5. **No magic numbers**: Use named constants

### Coverage Requirements

- **Lines**: 80%+
- **Statements**: 80%+
- **Functions**: 80%+
- **Branches**: 70%+

```bash
# Check coverage
npm run test:coverage

# View HTML report
open coverage/lcov-report/index.html
```

## 📋 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
# Good commits
git commit -m "feat(data): add koala dream generator"
git commit -m "fix(email): remove double dots in email addresses"
git commit -m "docs: update API documentation for koalaArt"
git commit -m "test: add edge cases for koalaNumber"
git commit -m "refactor(misc): simplify email generation logic"

# Bad commits
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfghjkl"
```

### Multi-line Commits

```bash
git commit -m "feat(api): add koala dream endpoint

- Generates random koala dreams
- Includes dream categories: food, sleep, trees
- Returns structured dream data

Closes #42"
```

## 🚀 Pull Request Process

### Before Submitting

- [ ] All tests pass (`npm test`)
- [ ] Code is linted (`npm run lint`)
- [ ] Project builds (`npm run build`)
- [ ] Coverage maintained or improved
- [ ] Documentation updated
- [ ] Examples added (if new feature)
- [ ] Self-review completed

### Submitting PR

1. **Push your branch**
```bash
git push origin feature/koala-dreams
```

2. **Create Pull Request** on GitHub

3. **Fill out the PR template completely**
   - Don't skip sections!
   - Be thorough but concise
   - Link related issues

4. **Respond to feedback**
   - Address review comments
   - Push updates to same branch
   - Mark conversations as resolved

### PR Title Format

```
feat(generator): add koala dream generator
fix(email): prevent double dots in addresses
docs: improve API documentation
```

### Getting Your PR Merged

✅ **Quick merge** if you:
- Follow all guidelines
- Include comprehensive tests
- Update documentation
- Respond quickly to feedback

⏳ **Slower review** if:
- Missing tests
- Breaking changes
- Unclear documentation
- Large/complex changes

### After Your PR is Merged

```bash
# Update your local repo
git checkout main
git pull upstream main

# Delete your feature branch
git branch -d feature/koala-dreams
git push origin --delete feature/koala-dreams
```

## ✨ Adding New Features

### Step-by-Step Guide

Let's add a new feature: **Koala Dream Generator**

#### 1. Create the Generator

```typescript
// src/generators/dream-generator.ts
import { RandomUtils } from '../utils/random';

const DREAM_TYPES = ['food', 'sleep', 'climbing', 'friends'];
const DREAM_LOCATIONS = ['eucalyptus forest', 'tall tree', 'cozy branch'];
const DREAM_ACTIVITIES = [
  'munching infinite eucalyptus leaves',
  'sleeping on clouds made of fur',
  'climbing the world\'s tallest tree'
];

export interface KoalaDream {
  type: string;
  location: string;
  activity: string;
  happiness: number;
}

export class DreamGenerator {
  static koalaDream(): KoalaDream {
    return {
      type: RandomUtils.getRandomElement(DREAM_TYPES),
      location: RandomUtils.getRandomElement(DREAM_LOCATIONS),
      activity: RandomUtils.getRandomElement(DREAM_ACTIVITIES),
      happiness: RandomUtils.getBiasedNumber(80, 100)
    };
  }
}
```

#### 2. Add Types

```typescript
// src/types/index.ts
export interface KoalaDream {
  type: string;
  location: string;
  activity: string;
  happiness: number;
}
```

#### 3. Export from Main

```typescript
// src/index.ts
export { DreamGenerator, KoalaDream } from './generators/dream-generator';

export class Koala {
  // ... existing methods ...
  static koalaDream = DreamGenerator.koalaDream;
}
```

#### 4. Write Tests

```typescript
// tests/dream.test.ts
import { describe, it, expect } from '@jest/globals';
import { DreamGenerator } from '../src/generators/dream-generator';

describe('DreamGenerator', () => {
  describe('koalaDream', () => {
    it('should generate a valid dream object', () => {
      const dream = DreamGenerator.koalaDream();
      
      expect(dream).toHaveProperty('type');
      expect(dream).toHaveProperty('location');
      expect(dream).toHaveProperty('activity');
      expect(dream).toHaveProperty('happiness');
    });

    it('should have happiness between 80 and 100', () => {
      for (let i = 0; i < 50; i++) {
        const dream = DreamGenerator.koalaDream();
        expect(dream.happiness).toBeGreaterThanOrEqual(80);
        expect(dream.happiness).toBeLessThanOrEqual(100);
      }
    });

    it('should return different dreams', () => {
      const dreams = new Set();
      for (let i = 0; i < 20; i++) {
        const dream = DreamGenerator.koalaDream();
        dreams.add(JSON.stringify(dream));
      }
      expect(dreams.size).toBeGreaterThan(1);
    });
  });
});
```

#### 5. Add Example

```typescript
// examples/dreams.ts
import Koala from '../src/index';

console.log('🐨 KOALA DREAM GENERATOR\n');
console.log('='.repeat(50));

console.log('\n💭 Random Koala Dreams:\n');
for (let i = 0; i < 5; i++) {
  const dream = Koala.koalaDream();
  console.log(`Dream ${i + 1}:`);
  console.log(`  Type: ${dream.type}`);
  console.log(`  Location: ${dream.location}`);
  console.log(`  Activity: ${dream.activity}`);
  console.log(`  Happiness: ${dream.happiness}%\n`);
}
```

#### 6. Update Documentation

```markdown
<!-- README.md -->

### `Koala.koalaDream()`
Generates a random koala dream with location and activity.

**Example:**
```typescript
const dream = Koala.koalaDream();
// {
//   type: 'food',
//   location: 'eucalyptus forest',
//   activity: 'munching infinite eucalyptus leaves',
//   happiness: 95
// }
```

#### 7. Run Everything

```bash
# Test
npm test

# Coverage
npm run test:coverage

# Lint
npm run lint

# Build
npm run build

# Try example
npx ts-node examples/dreams.ts
```

## 🎨 Design Philosophy

When adding features, keep the koala philosophy in mind:

### ✅ DO:
- Keep it silly and fun
- Make it actually useful for developers
- Follow existing patterns
- Add comprehensive examples
- Write good documentation
- Test thoroughly

### ❌ DON'T:
- Make it too serious or "enterprise"
- Add complex configuration
- Break existing APIs
- Forget the koala theme
- Skip tests or documentation
- Over-engineer solutions

## 🐨 Questions?

- **Need help?** Open a [discussion](https://github.com/mattqdev/koalaz/discussions)
- **Found a bug?** Open an [issue](https://github.com/mattqdev/koalaz/issues)
- **Want to chat?** Join our community discussions

## 🙏 Thank You!

Every contribution makes koalaz better! Whether you:
- Report a bug 🐛
- Suggest a feature ✨
- Fix a typo 📝
- Add a test 🧪
- Improve documentation 📚
- Or just star the repo ⭐

You're helping make the developer world a bit more fun, one sleepy koala at a time! 🐨💤

---

Now go forth and contribute! The koalas are waiting (well, they're probably sleeping, but they'll appreciate it when they wake up). 😴