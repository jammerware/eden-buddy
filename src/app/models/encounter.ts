import { Ability } from './ability';
import { EncounterEvent } from './encounter-event';

export class Encounter {
    id: string;
    name: string;
    acronym?: string;
    bossName?: string;
    abilities: Ability[];
    events: EncounterEvent[];
}