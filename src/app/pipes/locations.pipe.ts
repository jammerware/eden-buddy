import { Pipe, PipeTransform } from '@angular/core';
import { Location } from 'src/app/models/location';
import { Position } from '../models/position';
import { TimelinesService } from '../services/timelines.service';

@Pipe({ name: 'locations' })
export class LocationsPipe implements PipeTransform {
    constructor(private timelinesService: TimelinesService) { }

    transform(value: any, ...args: any[]): any {
        if (!value) {
            return null;
        }

        if (!Array.isArray(value)) {
            throw new Error(`Pass an array of Locations to the locations pipe.`);
        }

        if (args.length !== 1) {
            throw new Error(`Pass a position to the locations pipe.`);
        }

        const typedValue = value as Location[];
        const typedArg = args[0] as Position;
        const foundLocation = typedValue.find(location => this.timelinesService.isLocationForPosition(location, typedArg));

        if (foundLocation) {
            return foundLocation.location;
        }
        return null;
    }
}
