import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Position } from '../models/position';
import { Timeline } from '../models/timeline';
import { TimelineEvent } from '../models/timeline-event';
import { Note } from '../models/note';
import { Ability } from '../models/ability';

export interface TimelineEventArgs {
    positionId: string;
    timelineId: string;
    includeLessRelevantAbilities: boolean;
}

@Injectable({ providedIn: 'root' })
export class TimelinesService {
    // this is all shitty service-faking stuff that will be gone in real life
    private static ABILITIES: Ability[] = [
        {
            id: 'edens-gravity',
            name: "Eden's Gravity",
            notes: [{ positionTags: ["healer"], note: "Raidwide. Shields and heals work. Mitigation doesn't :(" }],
        },
        {
            id: "vv-dps",
            name: "Vice & Virtue (DPS)",
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
            id: "edens-flare",
            name: "Eden's Flare",
            locations: [{ location: "Inside the boss' hitbox" }],
        },
        {
            id: "vv-tanks",
            name: "Vice & Virtue (Tanks)",
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
                    note: "This'll hurt your poor tanks. Heals at the ready!"
                },
            ]
        },
        {
            id: "spear-of-paradise",
            name: "Spear of Paradise",
            notes: [
                { positionTags: ["tank"], note: "If tanking the boss when the cast starts, use an invuln. If not, taunt the boss as the second swipe hits." },
                { positionTags: ["healer"], note: "This is a tankbuster. The tank tanking the boss should use an invuln - be prepared to heal if they're not a PLD :)" },
            ]
        },
        {
            id: "vv-healers",
            name: "Vice & Virtue (Healers)",
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
            id: "delta-attack",
            name: "Delta Attack",
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
            id: "pure-light",
            name: "Pure Light",
            locations: [{ location: "Corner behind the boss" }],
            notes: [{ note: "The boss will jump to the corner from which it's furthest. Be behind the boss when the cast ends - don't touch the walls!" }],
        },
        {
            id: "dimensional-shift",
            name: "Dimensional Shift",
            notes: [{ positionTags: ["healer"], note: "Heavy raid-wide. Heals and shields work. Mitigation doesn't :(" }],
        },
        {
            id: "paradise-lost",
            name: "Paradise Lost",
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
            id: "pure-beam",
            name: "Pure Beam",
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
            id: "fragor-maximus",
            name: "Fragor Maximus",
            notes: [{ positionTags: ["healer"], note: "Raid-wide comet" }],
        },
        {
            id: "paradisal-dive",
            name: "Paradisal Dive",
            locations: [{ location: "South (S)" }],
            notes: [{ note: "Here come the adds. Stack with your group for shields, heals, and mitigation. Be sure to interrupt Mana Boost and cleave down the adds ASA-freaking-P." }],
        },
        {
            id: "vv-regained-tanks",
            name: "Vice & Virtue Regained (Tank)",
            locations: [
                { positions: ["H1", "M1", "R1", "T1"], location: "West (W)" },
                { positions: ["H2", "M2", "R2", "T2"], location: "East (E)" },
            ],
            notes: [{ note: "Stack with your partners at the appropriate position - there's usually a numbered waymark for this purpose. Make sure the tank in your stack isn't the closest to the boss." },]
        },
        {
            id: "vv-regained-dps",
            name: "Vice & Virtue Regained (DPS)",
            locations: [
                { positions: ["r1", "t1"], location: "Northwest (NW)" },
                { positions: ["r2", "t2"], location: "Northeast (NE)" },
                { positions: ["m2", "h2"], location: "Southeast (SE)" },
                { positions: ["m1", "h1"], location: "Southwest (SW)" },
            ],
            notes: [{ note: "You'll meet your partner max melee range in the same quadrant of the arena you used to handle Delta Attack. Stack with them." }],
        },
        {
            id: "delta-attack-regained",
            name: "Delta Attack Regained",
            locations: [
                { positionTags: ["healer", "dps"], location: "South (S)" },
                { positions: ["t1"], location: "Northwest (NW)" },
                { positions: ["t2"], location: "Northeast (NE)" }
            ],
            notes: [{ positionTags: ["healer", "dps"], note: "Stack with all non-tanks south to share damage." }],
        },
        {
            id: "vv-regained-healers",
            name: "Vice & Virtue Regained (Healers)",
            locations: [
                { positions: ["h1"], location: "Southwest (SW)" },
                { positions: ["h2"], location: "Southeast (SE)" },
                { positionTags: ["dps"], location: "South (S)" },
            ],
            notes: [
                { positionTags: ["healer"], note: "You'll get a prey marker. Pass it to the nearest DPS, who should be standing still and waiting for it." },
                { positionTags: ["dps"], note: "Stand still! Healers may be coming to give you a Prey marker. Accept it willingly and suffer well." },
            ],
        },
        {
            id: "arcane-spheres",
            name: "Arcane Spheres",
            locations: [
                { positions: ["r1"], location: "North (N)" },
                { positions: ["r2"], location: "East (E)" },
                { positions: ["h1"], location: "West (W)" },
                { positions: ["h2"], location: "South (S)" },
                { positionTags: ["melee job"], location: "Center" },
            ],
            notes: [
                { positionTags: ["ranged job"], note: "Four arcane spheres will spawn around the center of the arena (like Thordan, if you're of that vintage). Murder them - but you'll have to do it while handling the next mechanic... " },
                { positionTags: ["melee job"], note: "Four arcane spheres will spawn around the center of the arena (like Thordan, if you're of that vintage). Murder them summarily." },
            ]
        },
        {
            id: "pure-beam-regained",
            name: "Pure Beam Regained",
            locations: [
                { positions: ["r1"], location: "North (N)" },
                { positions: ["r2"], location: "East (E)" },
                { positions: ["h1"], location: "West (W)" },
                { positions: ["h2"], location: "South (S)" },
            ],
            notes: [
                { positionTags: ["ranged job"], note: "An orb with a rotation indicator will appear at your position. It's about to fire a triple beam at you - bait it such that when it rotates from its initial target OUT of the arena. For example, if you're at the east orb and it's rotating clockwise, stand just north of it." }
            ]
        },
        {
            id: "fragor-maximus-regained",
            name: "Fragor Maximus (Enrage)",
            notes: [{ note: "You lost the videogame." }],
        }
    ];

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
                { code: "m1", name: "Melee DPS 1", tags: ["dps", "melee dps", "melee job"] },
                { code: "m2", name: "Melee DPS 2", tags: ["dps", "melee dps", "melee job"] },
                { code: "r1", name: "Ranged DPS 1", tags: ["dps", "ranged dps", "ranged job"] },
                { code: "r2", name: "Ranged DPS 2", tags: ["dps", "ranged dps", "ranged job"] },
                { code: "t1", name: "Tank 1", tags: ["tank", "melee job"] },
                { code: "t2", name: "Tank 2", tags: ["tank", "melee job"] },
            ],
            abilities: TimelinesService.ABILITIES,
            events: [
                { time: "0:07", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-gravity") },
                { time: "0:17", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-dps") },
                { time: "0:27", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-flare") },
                { time: "0:42", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-tanks") },
                { time: "0:52", ability: TimelinesService.ABILITIES.find(a => a.id === "spear-of-paradise") },
                { time: "1:00", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-healers") },
                { time: "1:13", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-light") },
                { time: "1:26", ability: TimelinesService.ABILITIES.find(a => a.id === "delta-attack") },
                { time: "1:39", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "1:46", ability: TimelinesService.ABILITIES.find(a => a.id === "paradise-lost") },
                { time: "1:52", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-beam") },
                { time: "2:16", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "2:26", ability: TimelinesService.ABILITIES.find(a => a.id === "fragor-maximus") },
                { time: "2:46", ability: TimelinesService.ABILITIES.find(a => a.id === "paradisal-dive") },
                { time: "4:36", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-regained-tanks") },
                { time: "4:50", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-regained-dps") },
                { time: "5:05", ability: TimelinesService.ABILITIES.find(a => a.id === "delta-attack-regained") },
                { time: "5:16", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-regained-healers") },
                { time: "5:26", ability: TimelinesService.ABILITIES.find(a => a.id === "spear-of-paradise") },
                { time: "5:39", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "5:44", ability: TimelinesService.ABILITIES.find(a => a.id === "arcane-spheres") },
                { time: "5:45", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-beam-regained") },
                { time: "6:07", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-light") },
                { time: "6:18", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "6:31", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-gravity") },
                { time: "6:42", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-flare") },
                { time: "6:54", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-tanks") },
                { time: "7:04", ability: TimelinesService.ABILITIES.find(a => a.id === "spear-of-paradise") },
                { time: "7:12", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-dps") },
                { time: "7:27", ability: TimelinesService.ABILITIES.find(a => a.id === "delta-attack") },
                { time: "7:38", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-healers") },
                { time: "7:53", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "7:59", ability: TimelinesService.ABILITIES.find(a => a.id === "arcane-spheres") },
                { time: "8:00", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-beam-regained") },
                { time: "8:22", ability: TimelinesService.ABILITIES.find(a => a.id === "pure-light") },
                { time: "8:33", ability: TimelinesService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { time: "8:46", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-gravity") },
                { time: "8:57", ability: TimelinesService.ABILITIES.find(a => a.id === "edens-flare") },
                { time: "9:13", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-regained-tanks") },
                { time: "9:27", ability: TimelinesService.ABILITIES.find(a => a.id === "vv-regained-dps") },
                { time: "9:42", ability: TimelinesService.ABILITIES.find(a => a.id === "delta-attack-regained") },
                { time: "9:50", ability: TimelinesService.ABILITIES.find(a => a.id === "fragor-maximus-regained") },
            ],
        }
    ];

    get(id: string): Timeline {
        return TimelinesService.TIMELINES.find(t => t.id === id);
    }

    getAbility(timeline: Timeline, abilityId: string) {
        return timeline.abilities.find(a => a.id === abilityId);
    }

    getEvents(args: TimelineEventArgs): TimelineEvent[] {
        const timeline = this.get(args.timelineId);
        const position = this.getPosition(timeline, args.positionId);

        if (!position) {
            throw new Error(`Can't find position ${args.positionId} for timeline "${args.timelineId}".`);
        }

        return timeline.events.filter(ev => this.isAbilityRelevant({ position, ability: ev.ability, includeLessRelevantAbilities: args.includeLessRelevantAbilities }));
    }

    getPosition(timeline: Timeline, positionId: string): Position {
        return timeline
            .positions
            .find(p => p.code.toLocaleLowerCase() === positionId.toLocaleLowerCase());
    }

    public isAbilityRelevant(args: {
        ability: Ability,
        position: Position,
        includeLessRelevantAbilities: boolean,
    }): boolean {
        return args.includeLessRelevantAbilities ||
            args.ability.notes && args.ability.notes.some(n => this.isNoteForPosition(n, args.position)) ||
            args.ability.locations && args.ability.locations.some(l => this.isLocationForPosition(l, args.position));
    }

    public isLocationForPosition(location: Location, position: Position) {
        return !location.positionTags && !location.positions || // has no positions or tags, i.e. for everyone
            location.positions && location.positions.includes(position.code) || // is specifically for this position
            location.positionTags && location.positionTags.some(t => position.tags.includes(t)); // is for a tag that this position has
    }

    public isNoteForPosition(note: Note, position: Position) {
        return !note.positionTags && !note.positions ||
            note.positions && note.positions.includes(position.code) ||
            note.positionTags && position.tags && note.positionTags.some(t => position.tags.includes(t));
    }
}
