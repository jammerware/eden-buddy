import { Location } from './location';
import { Note } from './note';

export interface TimelineEntry {
    time: string;
    mechanic: string;
    locations?: Location[];
    notes?: Note[];
}
