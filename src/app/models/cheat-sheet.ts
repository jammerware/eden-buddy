import { CheatSheetPhase } from './cheat-sheet-phase';
import { Encounter } from './encounter';

export class CheatSheet {
    id: string;
    user: { id: string, name: string; };
    encounter: Encounter;
    phases: CheatSheetPhase[] = [];
}