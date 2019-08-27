import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({ providedIn: 'root' })
export class RolesService {
    getRole(fightRole: string) {
        fightRole = fightRole.toLocaleUpperCase();

        if (fightRole.startsWith('T')) return Role.Tank;
        if (fightRole.startsWith('H')) return Role.Healer;
        if (fightRole.startsWith('R')) return Role.RangedDPS;
        if (fightRole.startsWith('M')) return Role.MeleeDPS;

        throw new Error(`Couldn't parse role for "${fightRole}".`);
    }

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
