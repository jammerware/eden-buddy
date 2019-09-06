import { TestBed } from '@angular/core/testing';
import { TimelinesService } from './timelines.service';

describe('TimelinesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);
        expect(service).toBeTruthy();
    });

    it('should deem an event with an h1 note relevant for an h1', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isAbilityRelevant({
            position: { name: "Healer 1", code: "h1", tags: [] },
            ability: {
                id: "whatever",
                name: "random explosions",
                notes: [
                    { positions: ["h1"], note: "Yay" },
                ],
            },
            includeLessRelevantAbilities: false,
        });

        expect(result).toBeTruthy();
    });

    it('should deem an event with an m2 note irrelevant for an m1', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isAbilityRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            ability: {
                id: "whatever",
                name: "random explosions",
                notes: [
                    { positions: ["m2"], note: "Yay" },
                ],
            },
            includeLessRelevantAbilities: false,
        });

        expect(result).toBeFalsy();
    });

    it('should deem an event with a position/tagless note to be relevant to any position', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isAbilityRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            ability: {
                id: "delta-attack",
                name: "Delta Attack",
                tags: ["pattern AoE", "targeted AoE"],
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
            includeLessRelevantAbilities: false,
        });

        expect(result).toBeTruthy();
    });

    it('should deem an event with a non-matching tag irrelevant', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isAbilityRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            ability: {
                id: 'edens-gravity',
                name: "Eden's Gravity",
                tags: ["raid-wide"],
                notes: [{ positionTags: ["healer"], note: "Raidwide. Shields and heals work. Mitigation doesn't :(" }],
            },
            includeLessRelevantAbilities: false,
        });

        expect(result).toBeFalsy();
    });

    it('should deem an event with a non-matching position to be relevant if less relevant events are requested', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isAbilityRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            ability: {
                id: "whatever",
                name: "random explosions",
                notes: [
                    { positions: ["m2"], note: "Yay" },
                ],
            },
            includeLessRelevantAbilities: true,
        });

        expect(result).toBeTruthy();
    });
});
