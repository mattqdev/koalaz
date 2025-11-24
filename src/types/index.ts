
// src/types/index.ts
export interface KoalaData {
  id: string;
  name: string;
  age: number;
  sleepHours: number;
  eucalyptusConsumed: string;
  mood: KoalaMood;
  currentActivity: string;
  funFact: string;
  lastMoved: string;
  treeLoyalty: string;
}

export type KoalaMood = 'bored' | 'sleepy' | 'indifferent' | 'slightly annoyed';

export type ArtVariant = 'classic' | 'sleeping' | 'judging' | 'party' | 'error';

export interface KoalaAPIResponse {
  status: number;
  endpoint: string;
  timestamp: string;
  data: KoalaData | KoalaData[];
  message: string;
  koalaApproved: boolean;
  metadata: {
    processingTime: string;
    serverLocation: string;
    koalasInvolved: number;
  };
}