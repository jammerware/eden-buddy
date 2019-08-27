import { GeneralLocation, PositionLocation, PositionTagLocation } from './location';
import { Note } from './note';

export interface TimelineEntry {
    time: string;
    mechanic: string;
    locations?: GeneralLocation[] | PositionLocation[] | PositionTagLocation[];
    notes?: Note[];
}
