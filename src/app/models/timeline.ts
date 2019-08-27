import { TimelineEntry } from './timeline-entry';
import { Position } from './position';

export class Timeline {
    id: string;
    fight: {
        title: string;
        boss: string;
        acronym: string;
    };
    macro?: string;
    entries: TimelineEntry[];
    positions: Position[];
}
