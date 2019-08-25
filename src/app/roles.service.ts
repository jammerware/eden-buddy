import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RolesService {
    isDps(role: string): boolean {
        return ['H1', 'H2', 'T1', 'T2'].indexOf(role) === -1;
    }
}
