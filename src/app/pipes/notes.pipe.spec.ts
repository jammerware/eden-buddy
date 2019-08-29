import { NotesPipe } from './notes.pipe';
import { TimelinesService } from '../services/timelines.service';

describe('NotesPipe', () => {
    it('create an instance', () => {
        const pipe = new NotesPipe(new TimelinesService());
        expect(pipe).toBeTruthy();
    });
});
