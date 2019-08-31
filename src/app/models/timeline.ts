import { TimelineEvent } from './timeline-event';
import { Position } from './position';
import { Ability } from './ability';

export class Timeline {
    id: string;
    fight: {
        title: string;
        boss: string;
        acronym: string;
    };
    macro?: string;
    events: TimelineEvent[];
    positions: Position[];
    abilities: Ability[];
}
