// koala - The most essential npm package you never knew you needed
// A completely useless but adorable mock data generator 🐨

// src/index.ts
import { ActionGenerator } from './generators/action';
import { APIGenerator } from './generators/api';
import { ArtGenerator } from './generators/art';
import { DataGenerator } from './generators/data';
import { MiscGenerator } from './generators/misc';
import { TableGenerator } from './generators/table';
import { TextGenerator } from './generators/text';

export { KoalaData, KoalaMood, ArtVariant, KoalaAPIResponse } from './types';
export { DataGenerator } from './generators/data';
export { TextGenerator } from './generators/text';
export { ArtGenerator } from './generators/art';
export { ActionGenerator } from './generators/action';
export { TableGenerator } from './generators/table';
export { APIGenerator } from './generators/api';
export { MiscGenerator } from './generators/misc';

// Main class for convenience
export class Koala {
  static generateKoalaData = DataGenerator.generateKoalaData;
  static koalaName = DataGenerator.koalaName;
  static koalaFact = DataGenerator.koalaFact;
  
  static koalaIpsum = TextGenerator.koalaIpsum;
  
  static koalaArt = ArtGenerator.koalaArt;
  
  static koalaActions = ActionGenerator.koalaActions;
  
  static koalaTable = TableGenerator.koalaTable;
  
  static koalaAPI = APIGenerator.koalaAPI;
  
  static koalaColor = MiscGenerator.koalaColor;
  static koalaEmail = MiscGenerator.koalaEmail;
  static koalaPassword = MiscGenerator.koalaPassword;
  static koalaDelay = MiscGenerator.koalaDelay;
  static koalaNumber = MiscGenerator.koalaNumber;
}

export default Koala;