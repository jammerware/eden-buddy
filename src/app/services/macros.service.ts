import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MacrosService {
    getE1s(): string {
        return this.formatMacro(`
/micon "Eden Minor" minion
______________________________________________
■    → Delta Attack         ■  → 8 Laser Orb bait |
| (also your buddy pairing)                                      |
|               ¦              |                                  |
|               ¦              |                          |
|    …………………………   |                      |
|               ¦              |                           |
|               ¦              |                                   |
|_______________________|______________________|
■ → Spinny Orbs bait    | 
|                                      | 
|                              |
|                                      | – Intercardinals
|_______________________|    rotate CW for orbs
        `);
    }

    private formatMacro(macro: string) {
        return macro.trim();
    }
}
