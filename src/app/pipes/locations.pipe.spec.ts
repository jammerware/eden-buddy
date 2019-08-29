import { LocationsPipe } from './locations.pipe';
import { TimelinesService } from '../services/timelines.service';

describe('LocationsPipe', () => {
    it('create an instance', () => {
        const pipe = new LocationsPipe(new TimelinesService());
        expect(pipe).toBeTruthy();
    });
});
