import { Role } from './role';

export interface FightTimelineEntry {
    time: string;
    mechanic: string;
    position?: string;
    notes?: string;
    isImportant?: boolean;
    affectsRoles: Role[];
}