import { Location } from './location';
import { Note } from './note';

export interface TimelineEvent {
    time: string;
    mechanic: string;
    locations?: Location[];
    notes?: Note[];
}
