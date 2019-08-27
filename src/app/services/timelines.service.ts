import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline';

@Injectable({ providedIn: 'root' })
export class TimelinesService {
    private static TIMELINES: Timeline[] = [
        {
            id: "e1s",
            fight: {
                title: "Eden's Gate: Resurrection",
                boss: "Eden Prime",
                acronym: "E1S",
            },
            entries: [

            ],
        }
    ];
}
