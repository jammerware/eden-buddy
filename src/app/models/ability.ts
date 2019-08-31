import { Location } from './location';
import { Note } from './note';

export class Ability {
    id: string;
    name: string;
    locations?: Location[];
    notes?: Note[];
}