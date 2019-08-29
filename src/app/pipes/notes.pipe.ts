import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Position } from 'src/app/models/position';
import { TimelinesService } from '../services/timelines.service';

@Pipe({ name: 'notes' })
export class NotesPipe implements PipeTransform {
    constructor(private timelinesService: TimelinesService) { }

    transform(value: any, ...args: any[]): any {
        if (!value) {
            return [];
        }

        if (!Array.isArray(value)) {
            throw new Error(`Pass an array of notes to the notes pipe (got: ${value}).`);
        }

        if (!args || !args.length) {
            throw new Error("Pass a position to the notes pipe.");
        }

        const typedValue = value as Note[];
        const typedPosition = args[0] as Position;
        const notes: string[] = [];

        for (const note of typedValue) {
            if (this.timelinesService.isNoteForPosition(note, typedPosition)) {
                notes.push(note.note);
            }
        }

        return notes;
    }

    private isNote(note: any): note is Note {
        return !!!note.note
    }
}
