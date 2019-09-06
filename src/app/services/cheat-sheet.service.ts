import { Injectable } from '@angular/core';
import { CheatSheet } from '../models/cheat-sheet';
import { EncountersService } from './encounters.service';

@Injectable({ providedIn: 'root' })
export class CheatSheetService {
    constructor(private encountersService: EncountersService) { }

    get(userId: string, encounterId: string): CheatSheet {
        const encounter = this.encountersService.get(encounterId);

        return {
            id: 'a685e61e-8529-4d65-88c5-e5c6888a8159',
            user: { id: '066dcf99-5edf-44be-9aca-811542d1585b', name: "Ben!" },
            encounter,
            phases: [
                {
                    name: "Intro",
                    abilities: [
                        encounter.abilities.find(a => a.id === "edens-gravity"),
                        encounter.abilities.find(a => a.id === "vv-dps"),
                        encounter.abilities.find(a => a.id === "edens-flare"),
                        encounter.abilities.find(a => a.id === "vv-tanks"),
                        encounter.abilities.find(a => a.id === "spear-of-paradise"),
                        encounter.abilities.find(a => a.id === "vv-healers"),
                    ]
                },
                {
                    name: "Delta Attack/Dim Shift",
                    abilities: [
                        encounter.abilities.find(a => a.id === "pure-light"),
                        encounter.abilities.find(a => a.id === "delta-attack"),
                        encounter.abilities.find(a => a.id === "dimensional-shift"),
                        encounter.abilities.find(a => a.id === "paradise-lost"),
                        encounter.abilities.find(a => a.id === "pure-beam"),
                        encounter.abilities.find(a => a.id === "dimensional-shift"),
                    ]
                },
                {
                    name: "Adds",
                    abilities: [
                        encounter.abilities.find(a => a.id === "fragor-maximus"),
                        encounter.abilities.find(a => a.id === "paradisal-dive"),
                    ],
                },
            ]
        }
    }
}
