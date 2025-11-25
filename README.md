<div align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyd2VocXVjODB6MmMwbHB2eWtzdGJpcHZ2emp5ZHRoMXZ6ejVqeDhreCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0Exp5zQH1jP7Dcbe/200w.gif" width=40% height=40%  alt="koala gif" />
</div>

# 🐨 koalaz

> The most useless but adorable placeholder generator in the npm ecosystem. Because your project deserves koala-themed mock data.

[![npm version](https://img.shields.io/npm/v/koalaz)](https://www.npmjs.com/package/koalaz)
[![npm downloads](https://img.shields.io/npm/dw/koalaz)](https://www.npmjs.com/package/koalaz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Koala Approved](https://img.shields.io/badge/🐨-approved-green)](https://github.com/mattqdev/koalaz)

**⚠️ DISCLAIMER**: This is a meme project. It's intentionally ridiculous. But oddly useful for testing and prototyping. No koalas were harmed during development (they were all sleeping).

## 🎯 Why?

Because `lorem ipsum` is boring. Because `faker` is too serious. Because your tests deserve to be adorable and absurd. Because koalas.

## 📥 Installation
```bash
npm install koalaz
```

## 🚀 Usage
```javascript
import Koala from 'koalaz';
// or
// const Koala = require('koalaz');

// Generate absurd JSON data about koalas
const koala = Koala.generateJSONData();
console.log(koala);
// {
//   id: 'KOALA-4287',
//   name: 'Sir Dormington',
//   age: 12,
//   sleepHours: 21,
//   eucalyptusConsumed: '743g',
//   mood: 'sleepy',
//   currentActivity: 'contemplating existence',
//   funFact: 'Brain occupies only 61% of skull, rest is empty',
//   lastMoved: '47 hours ago',
//   treeLoyalty: '94%'
// }

// Lorem ipsum made of koala sounds
console.log(Koala.getLoremIpsum(2, 3));
// WAAAAH grrrumph eucalyptus munch snort. zzzzz wheeze grunt...

// ASCII Art!
console.log(Koala.getArt('judging'));
//     ʕ ಠᴥಠʔ
//    /|     |\\
//   (_|     |_)
//   judging you

// Fake data tables
const table = Koala.getTable(3);
console.log(table);

// API response faker
const response = Koala.getAPI('/api/koalas/sleep');

// And much more!
console.log(Koala.getName());      // 'Supreme Eucalyptus'
console.log(Koala.getFact());      // 'Sleeps more than you've ever dreamed of'
console.log(Koala.getColor());     // '#8B7D6B'
console.log(Koala.getEmail());     // 'sir.dormington@sleepy.land'
console.log(Koala.getActions(3));  // Array of 3 ridiculous actions
```

## 🎨 Complete API

### `Koala.generateJSONData(count = 1)`
Generates JSON objects with completely absurd koala data.

### `Koala.getLoremIpsum(paragraphs = 3, sentencesPerParagraph = 5)`
Lorem ipsum made entirely of koala sounds. Perfect for text placeholders.

### `Koala.getArt(variant = 'classic')`
ASCII art of koalas. Variants: `'classic'`, `'sleeping'`, `'judging'`, `'party'`, `'error'`

### `Koala.getActions(count = 5)`
List of ridiculous actions that koalas might do (or more likely won't do).

### `Koala.getTable(rows = 5)`
Generates fake tabular data in array format.

### `Koala.getNumber(min = 0, max = 100)`
Random number with bias towards lower values (like koalas: slow and lazy).

### `Koala.getAPI(endpoint = '/koalas')`
Mock complete API response with absurd metadata.

### Other methods:
- `getName()` - Random name
- `getFact()` - Random fact
- `getColor()` - Hexadecimal color inspired by koalas
- `getEmail()` - Fake email
- `getPassword()` - "Secure" password
- `getDelay(ms)` - Async "realistic" delay (slow like a koala)


## 🎭 Use Cases

- **Testing & Mocking**: Fun placeholder data for automated tests
- **Prototypes**: Fill your UIs with adorable content
- **Demos**: Impress clients with koalas instead of "Lorem ipsum dolor sit amet"
- **Presentations**: Why not?
- **Procrastination**: The main reason

## 🤝 Contributing

Pull requests welcome! Especially if you add more absurd koala facts or new ASCII art variants.

## 📜 License

MIT - Do whatever you want, but please credit the koalas.

## ⚠️ Important Notes

- Koalas are protected animals. This package is not.
- No koalas were awakened during development.
- The author is not responsible for excessive use of koala emojis in your projects.
- If this package made you smile, mission accomplished 🎉

## 🐨 True Fun Facts

Yes, some of the facts in the code are real:
- Koalas really do sleep 18-22 hours a day
- Their fingerprints are almost identical to humans
- Their brain is strangely small for their skull
- "Koala" really means "no drink" in an Aboriginal language
- Baby koalas really eat... let's not go there

---

Made with 😴 and 🌿 by a koala on a tree somewhere in ~~Australia~~ *Italy*