import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RolesService {
    isHealerOrRanged(role: string) {
        return ['R1', 'R2', 'H1', 'H2'].indexOf(role) >= 0;
    }

    isDps(role: string): boolean {
        return ['H1', 'H2', 'T1', 'T2'].indexOf(role) === -1;
    }

    isHealer(role: string): boolean {
        return ['H1', 'H2'].indexOf(role) >= 0;
    }

    isTank(role: string): boolean {
        return ['T1', 'T2'].indexOf(role) >= 0;
    }

    isTankOrMelee(role: string): boolean {
        return ['M1', 'M2', 'T1', 'T2'].indexOf(role) >= 0;
    }
}
