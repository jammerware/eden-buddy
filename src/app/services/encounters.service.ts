import { Injectable } from '@angular/core';
import { Encounter } from '../models/encounter';
import { Ability } from '../models/ability';

@Injectable({ providedIn: 'root' })
export class EncountersService {
    private static ABILITIES: Ability[] = [
        {
            id: 'edens-gravity',
            name: "Eden's Gravity",
            tags: ["raid-wide"],
        },
        {
            id: "vv-dps",
            name: "Vice & Virtue (DPS)",
            tags: ["targeted AoE"],
        },
        {
            id: "edens-flare",
            name: "Eden's Flare",
            tags: ["pattern AoE"],
        },
        {
            id: "vv-tanks",
            name: "Vice & Virtue (Tanks)",
            tags: ["tankbuster", "targeted AoE"],
        },
        {
            id: "spear-of-paradise",
            name: "Spear of Paradise",
            tags: ["tankbuster", "tank swap"],
        },
        {
            id: "vv-healers",
            name: "Vice & Virtue (Healers)",
        },
        {
            id: "delta-attack",
            name: "Delta Attack",
            tags: ["pattern AoE", "targeted AoE"],
        },
        {
            id: "pure-light",
            name: "Pure Light",
            tags: ["pattern AoE"],
        },
        {
            id: "dimensional-shift",
            name: "Dimensional Shift",
            tags: ["raid-wide"],
        },
        {
            id: "paradise-lost",
            name: "Paradise Lost",
            tags: ["targeted AoE"],
        },
        {
            id: "pure-beam",
            name: "Pure Beam",
            tags: ["targeted AoE"],
        },
        {
            id: "fragor-maximus",
            name: "Fragor Maximus",
            tags: ["raid-wide"],
        },
        {
            id: "paradisal-dive",
            name: "Paradisal Dive",
            tags: ["raid-wide"],
        },
        {
            id: "vv-regained-tanks",
            name: "Vice & Virtue Regained (Tank)",
            tags: ["targeted AoE", "stack"],
            locations: [
                { positions: ["H1", "M1", "R1", "T1"], location: "West (W)" },
                { positions: ["H2", "M2", "R2", "T2"], location: "East (E)" },
            ],
            notes: [{ note: "Stack with your partners at the appropriate position - there's usually a numbered waymark for this purpose. Make sure the tank in your stack isn't the closest to the boss." },]
        },
        {
            id: "vv-regained-dps",
            name: "Vice & Virtue Regained (DPS)",
            tags: ["stack", "targeted AoE"],
        },
        {
            id: "delta-attack-regained",
            name: "Delta Attack Regained",
            tags: ["stack"],
        },
        {
            id: "vv-regained-healers",
            name: "Vice & Virtue Regained (Healers)",
        },
    ];

    private static ENCOUNTERS: Encounter[] = [
        {
            id: "e1s",
            name: "Eden's Gate: Resurrection",
            acronym: "E1S",
            bossName: "Eden Prime",
            abilities: EncountersService.ABILITIES,
            events: [
                { timestamp: "0:07", ability: EncountersService.ABILITIES.find(a => a.id === "edens-gravity") },
                { timestamp: "0:17", ability: EncountersService.ABILITIES.find(a => a.id === "vv-dps") },
                { timestamp: "0:27", ability: EncountersService.ABILITIES.find(a => a.id === "edens-flare") },
                { timestamp: "0:42", ability: EncountersService.ABILITIES.find(a => a.id === "vv-tanks") },
                { timestamp: "0:52", ability: EncountersService.ABILITIES.find(a => a.id === "spear-of-paradise") },
                { timestamp: "1:00", ability: EncountersService.ABILITIES.find(a => a.id === "vv-healers") },
                { timestamp: "1:13", ability: EncountersService.ABILITIES.find(a => a.id === "pure-light") },
                { timestamp: "1:26", ability: EncountersService.ABILITIES.find(a => a.id === "delta-attack") },
                { timestamp: "1:39", ability: EncountersService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { timestamp: "1:46", ability: EncountersService.ABILITIES.find(a => a.id === "paradise-lost") },
                { timestamp: "1:52", ability: EncountersService.ABILITIES.find(a => a.id === "pure-beam") },
                { timestamp: "2:16", ability: EncountersService.ABILITIES.find(a => a.id === "dimensional-shift") },
                { timestamp: "2:26", ability: EncountersService.ABILITIES.find(a => a.id === "fragor-maximus") },
                { timestamp: "2:46", ability: EncountersService.ABILITIES.find(a => a.id === "paradisal-dive") },
                { timestamp: "4:36", ability: EncountersService.ABILITIES.find(a => a.id === "vv-regained-tanks") },
                { timestamp: "4:50", ability: EncountersService.ABILITIES.find(a => a.id === "vv-regained-dps") },
                { timestamp: "5:05", ability: EncountersService.ABILITIES.find(a => a.id === "delta-attack-regained") },
                { timestamp: "5:16", ability: EncountersService.ABILITIES.find(a => a.id === "vv-regained-healers") },
                { timestamp: "5:26", ability: EncountersService.ABILITIES.find(a => a.id === "spear-of-paradise") },
                { timestamp: "5:39", ability: EncountersService.ABILITIES.find(a => a.id === "dimensional-shift") },
            ],
        },
    ];

    public get(id: string): Encounter {
        return EncountersService.ENCOUNTERS.find(e => e.id === id);
    }
}
