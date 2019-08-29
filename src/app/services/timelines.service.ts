import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline';
import { TimelineEvent } from '../models/timeline-event';
import { Position } from '../models/position';

export interface TimelineEventArgs {
    timelineId: string;
    positionId: string;
    excludeLessRelevantEvents?: boolean;
}

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
            macro: `
            /micon "Eden Minor" minion
            ______________________________________________
            ■    → Delta Attack         ■  → 8 Laser Orb bait |
            | (also your buddy pairing)                                      |
            |               ¦              |                                  |
            |               ¦              |                          |
            |    …………………………   |                      |
            |               ¦              |                           |
            |               ¦              |                                   |
            |_______________________|______________________|
            ■ → Spinny Orbs bait    | 
            |                                      | 
            |                              |
            |                                      | – Intercardinals
            |_______________________|    rotate CW for orbs
            `,
            positions: [
                { code: "h1", name: "Healer 1", tags: ["healer", "ranged job"] },
                { code: "h2", name: "Healer 2", tags: ["healer", "ranged job"] },
                { code: "m1", name: "Melee DPS 1", tags: ["dps", "melee job"] },
                { code: "m2", name: "Melee DPS 2", tags: ["dps", "melee job"] },
                { code: "r1", name: "Ranged DPS 1", tags: ["dps", "ranged job"] },
                { code: "r2", name: "Ranged DPS 2", tags: ["dps", "ranged job"] },
                { code: "t1", name: "Tank 1", tags: ["tank", "melee job"] },
                { code: "t2", name: "Tank 2", tags: ["tank", "melee job"] },
            ],
            events: [
                {
                    time: "0:07",
                    mechanic: "Eden's Gravity",
                    notes: [{ positionTags: ["healer"], note: "Raidwide. Shields and heals work. Mitigation doesn't :(" }],
                },
                {
                    time: "0:17",
                    mechanic: "Vice & Virtue (DPS)",
                    locations: [
                        { positions: ["m1"], location: "West (W)" },
                        { positions: ["m2"], location: "South (S)" },
                        { positions: ["r1"], location: "North (N)" },
                        { positions: ["r2"], location: "East (E)" },
                        { positionTags: ["healer", "tank"], location: "In melee range" },
                    ],
                    notes: [
                        { positionTags: ["dps"], note: "By the end of the cast, be near the edge of the arena in the direction of your position. When the puddle appears, return to the boss." },
                    ],
                },
                {
                    time: "0:27",
                    mechanic: "Eden's Flare",
                    locations: [{ location: "Inside the boss' hitbox" }],
                },
                {
                    time: "0:42",
                    mechanic: "Vice & Virtue (Tanks)",
                    locations: [
                        { positions: ["t1"], location: "Northwest (NW)" },
                        { positions: ["t2"], location: "Northeast (NE)" },
                        { positionTags: ["dps", "healer"], location: "Stacked South (S) with non-tanks" },

                    ],
                    notes: [
                        {
                            positionTags: ["tank"],
                            note: "Be in melee range in the appropriate direction. Don't forget your mitigation!",
                        },
                        {
                            positionTags: ["healer"],
                            note: "This is gonna hurt your poor tanks. Heals at the ready!"
                        },
                    ]
                },
                {
                    time: "0:52",
                    mechanic: "Spear of Paradise",
                    notes: [
                        { positionTags: ["tank"], note: "If tanking the boss when the cast starts, use an invuln. If not, taunt the boss as the second swipe hits." },
                        { positionTags: ["healer"], note: "This is a tankbuster. The tank tanking the boss should use an invuln - be prepared to heal if they're not a PLD :)" },
                    ]
                },
                {
                    time: "1:00",
                    mechanic: "Vice & Virtue (Healers)",
                    locations: [
                        { positions: ["t1", "h1"], location: "Northwest (NW) - melee range" },
                        { positions: ["t2", "h2"], location: "Northeast (NE) - melee range" },
                        { positionTags: ["dps"], location: "South (S) - melee range" },
                    ],
                    notes: [
                        { positionTags: ["tank"], note: "Stand as still as you can at your position in melee range of the boss. This lets your healer bring the prey marker to you more easily." },
                        { positionTags: ["healer"], note: "Bring your prey marker to the tank buddy at your assigned position. Don't forget to thank them for their trouble with a Lustrate when the cast goes off!" },
                        { positionTags: ["dps"], note: "Stay just south of the boss while the healers and tanks handle this - being out of position might land you with a Prey marker you don't want." },
                    ]
                },
                {
                    time: "1:26",
                    mechanic: "Delta Attack",
                    locations: [
                        { positions: ["h1"], location: "Southwest (SW) - corner" },
                        { positions: ["h2"], location: "Southeast (SE) - corner" },
                        { positions: ["m1"], location: "Southwest (SW) - max melee" },
                        { positions: ["m2"], location: "Southeast (SE) - max melee" },
                        { positions: ["r1"], location: "Northwest (NW) - corner" },
                        { positions: ["r2"], location: "Northeast (NE) - corner" },
                        { positions: ["t1"], location: "Northwest (NW) - max melee" },
                        { positions: ["t2"], location: "Northeast (NE) - max melee" },
                    ],
                    notes: [{ note: "Your raid group will form a large X centered on the boss. Be in your position when the cast ends, or you'll clip a party member with your AOE or die to another one yourself." }],
                },
                {
                    time: "1:13",
                    mechanic: "Pure Light",
                    locations: [{ location: "Corner behind the boss" }],
                    notes: [{ note: "The boss will jump to the corner from which it's furthest. Be behind the boss when the cast ends - don't touch the walls!" }],
                },
                {
                    time: "1:39",
                    mechanic: "Dimensional Shift",
                    notes: [{ positionTags: ["healer"], note: "Heavy raid-wide. Heals and shields work. Mitigation doesn't :(" }],
                },
                {
                    time: "1:46",
                    mechanic: "Paradise Lost",
                    locations: [
                        { positions: ["H1"], location: "West (W)" },
                        { positions: ["H2"], location: "South (S)" },
                        { positions: ["R1"], location: "North (N)" },
                        { positions: ["R2"], location: "East (E)" },
                    ],
                    notes: [
                        {
                            positionTags: ["ranged job"],
                            note: "Start at the corner counterclockwise from your position. Bait 5 puddles along the wall as you move toward your position, and be between your orb and the wall at the end of the cast."
                        }
                    ],
                },
                {
                    time: "1:52",
                    mechanic: "Pure Beam",
                    locations: [
                        { positions: ["h1"], location: "West (W)" },
                        { positions: ["h2"], location: "South (S)" },
                        { positions: ["m1"], location: "Southwest (SW)" },
                        { positions: ["m2"], location: "Southeast (SE)" },
                        { positions: ["r1"], location: "North (N)" },
                        { positions: ["r2"], location: "East (E)" },
                        { positions: ["t1"], location: "Northwest (NW)" },
                        { positions: ["t2"], location: "Northeast (NE)" },
                    ],
                    notes: [{ note: "When Pure Beam is nearly finished casting, run out, placing yourself close to your orb, but standing between it and the wall of the arena." }],
                },
                {
                    time: "2:16",
                    mechanic: "Dimensional Shift",
                    notes: [{ positionTags: ["healer"], note: "Heavy raid-wide. Heals and shields work. Mitigation doesn't :(" }],
                },
                {
                    time: "2:26",
                    mechanic: "Fragor Maximus",
                    notes: [{ positionTags: ["healer"], note: "Raid-wide" }],
                },
                {
                    time: "2:46",
                    mechanic: "Paradisal Dive",
                    locations: [{ location: "South (S)" }],
                    notes: [{ note: "Here come the adds. Stack with your group for shields, heals, and mitigation. Be sure to interrupt Mana Boost and cleave down the adds ASA-freaking-P." }],
                },
                {
                    time: "4:36",
                    mechanic: "Vice & Virtue Regained (Tank)",
                    locations: [
                        { positions: ["H1", "M1", "R1", "T1"], location: "West (W)" },
                        { positions: ["H2", "M2", "R2", "T2"], location: "East (E)" },
                    ],
                    notes: [{ note: "Stack with your partners at the appropriate position - there's usually a numbered waymark for this purpose. Make sure the tank in your stack isn't the closest to the boss." },]
                },
                {
                    time: "4:50",
                    mechanic: "Vice & Virtue Regained (DPS)",
                    locations: [
                        { positions: ["r1", "t1"], location: "Northwest (NW)" },
                        { positions: ["r2", "t2"], location: "Northeast (NE)" },
                        { positions: ["m2", "h2"], location: "Southeast (SE)" },
                        { positions: ["m1", "h1"], location: "Southwest (SW)" },
                    ],
                }
            ],
        }
    ];

    get(id: string): Timeline {
        return TimelinesService.TIMELINES.find(t => t.id === id);
    }

    getEvents(args: TimelineEventArgs): TimelineEvent[] {
        const timeline = this.get(args.timelineId);
        const position = timeline.positions.find(p => p.code.localeCompare(args.positionId, [], { sensitivity: "base" }));

        if (!position) {
            throw new Error(`Can't find position ${args.positionId} for timeline "${args.timelineId}".`);
        }

        return timeline.events.filter(ev => {
            !!!args.excludeLessRelevantEvents ||
                ev.notes.some(n =>
                    n.positionTags === null && n.positions === null ||
                    n.positions && n.positions.includes(args.positionId) ||
                    n.positionTags && n.positionTags.some(t => position.tags.includes(t))
                ) ||
                ev.locations.some(l =>
                    l.positionTags === null && l.positions === null ||
                    l.positions.includes(args.positionId) ||
                    l.positionTags.some(t => position.tags.includes(t))
                );
        });
    }

    private formatMacro(macro: string) {
        return macro.trim();
    }

    public isEventRelevant(args: {
        position: Position,
        event: TimelineEvent,
        includeLessRelevantEvents: boolean,
    }): boolean {
        return args.includeLessRelevantEvents ||
            args.event.notes.some(n =>
                n.positionTags === null && n.positions === null ||
                n.positions && n.positions.includes(args.position.code) ||
                n.positionTags && n.positionTags.some(t => args.position.tags.includes(t))
            ) ||
            args.event.locations.some(l =>
                l.positionTags === null && l.positions === null ||
                l.positions.includes(args.position.code) ||
                l.positionTags.some(t => args.position.tags.includes(t))
            );
    }
}
