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
  static generateJSONData = DataGenerator.generateJSONData;
  static getName = DataGenerator.getName;
  static getFact = DataGenerator.getFact;
  
  static getLoremIpsum = TextGenerator.getLoremIpsum;
  
  static getArt = ArtGenerator.getArt;
  
  static getActions = ActionGenerator.getActions;
  
  static getTable = TableGenerator.getTable;
  
  static getAPI = APIGenerator.getAPI;
  
  static getColor = MiscGenerator.getColor;
  static getEmail = MiscGenerator.getEmail;
  static getPassword = MiscGenerator.getPassword;
  static getDelay = MiscGenerator.getDelay;
  static getNumber = MiscGenerator.getNumber;
}

export default Koala;