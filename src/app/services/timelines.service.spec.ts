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

        const result = service.isEventRelevant({
            position: { name: "Healer 1", code: "h1", tags: [] },
            event: {
                time: "1:23",
                mechanic: "random explosions",
                notes: [
                    { positions: ["h1"], note: "Yay" },
                ],
            },
            includeLessRelevantEvents: false,
        });

        expect(result).toBeTruthy();
    });

    it('should deem an event with an m2 note irrelevant for an m1', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isEventRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            event: {
                time: "1:23",
                mechanic: "random explosions",
                notes: [
                    { positions: ["m2"], note: "Yay" },
                ],
            },
            includeLessRelevantEvents: false,
        });

        expect(result).toBeFalsy();
    });

    it('should deem an event with a position/tagless note to be relevant to any position', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isEventRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            event: {
                time: "1:23",
                mechanic: "random explosions",
                notes: [
                    { note: "Yay" },
                ],
            },
            includeLessRelevantEvents: false,
        });

        expect(result).toBeTruthy();
    });

    it('should deem an event with a non-matching position to be relevant if less relevant events are requested', () => {
        const service: TimelinesService = TestBed.get(TimelinesService);

        const result = service.isEventRelevant({
            position: { name: "Melee 1", code: "m1", tags: [] },
            event: {
                time: "1:23",
                mechanic: "random explosions",
                notes: [
                    { positions: ["m2"], note: "Yay" },
                ],
            },
            includeLessRelevantEvents: true,
        });

        expect(result).toBeTruthy();
    });
});
