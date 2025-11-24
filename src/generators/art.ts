// src/generators/art.ts
import { ArtVariant } from '../types';

export class ArtGenerator {
  private static readonly arts: Record<ArtVariant, string> = {
    classic: `
    ʕ •ᴥ•ʔ
   /|     |\\
  (_|     |_)
     KOALA
`,
    sleeping: `
    zzZ  ʕ -ᴥ-ʔ
        /|     |\\
       (_|     |_)
    *sleeping*
`,
    judging: `
    ʕ ಠᴥಠʔ
   /|     |\\
  (_|     |_)
  judging you
`,
    party: `
  ✨ ʕ •ᴥ•ʔ ✨
    \\|     |/
    (_|     |_)
   🎉 PARTY! 🎉
`,
    error: `
    ʕ ⊙ᴥ⊙ʔ
   /|  ?  |\\
  (_|     |_)
   404: Koala
   Not Found
`
  };

  static getArt(variant: ArtVariant = 'classic'): string {
    return ArtGenerator.arts[variant] || ArtGenerator.arts.classic;
  }
}