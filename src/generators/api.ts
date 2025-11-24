// src/generators/api.ts
import { KoalaAPIResponse } from '../types';
import { DataGenerator } from './data';
import { RandomUtils } from '../utils/random';

export class APIGenerator {
  static koalaAPI(endpoint: string = '/koalas'): KoalaAPIResponse {
    return {
      status: RandomUtils.getBiasedNumber(200, 299),
      endpoint,
      timestamp: new Date().toISOString(),
      data: DataGenerator.generateKoalaData(RandomUtils.getBiasedNumber(1, 5)),
      message: 'zzzzz... operation completed successfully',
      koalaApproved: true,
      metadata: {
        processingTime: `${RandomUtils.getBiasedNumber(1, 10)}ms (impressive for a koala)`,
        serverLocation: 'Eucalyptus Forest, Australia',
        koalasInvolved: RandomUtils.getBiasedNumber(1, 3)
      }
    };
  }
}