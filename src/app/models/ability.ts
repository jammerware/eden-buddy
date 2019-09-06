import { Location } from './location';
import { Note } from './note';

export class Ability {
    id: string;
    name: string;
    tags?: string[];
    locations?: Location[];
    notes?: Note[];
}