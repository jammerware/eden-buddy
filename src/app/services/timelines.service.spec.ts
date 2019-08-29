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
                ]
            },
            includeLessRelevantEvents: false,
        });

        expect(result).toBeTruthy();
    });
});
