import { FightTimelineEntry } from './fight-timeline-entry';

export class Timeline {
    id: string;
    fight: {
        title: string;
        boss: string;
        acronym: string;
    };
    entries: FightTimelineEntry[];
    positions: string[];
}
