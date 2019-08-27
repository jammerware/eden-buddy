import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';

import { TimelinesService } from 'src/app/services/timelines.service';
import { TimelineEntry } from 'src/app/models/timeline-entry';
import { Timeline } from 'src/app/models/timeline';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    displayedColumns = ['time', 'mechanic', 'position', 'notes'];
    simple = false;
    selectedRole: string;
    tableData: TimelineEntry[];
    timeline: Timeline;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private timelinesService: TimelinesService,
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (!params.timelineId) {
                throw new Error("No timelineId in route to TimelineComponent.");
            }

            this.timeline = this.timelinesService.get(params.timelineId);

            if (params.role) {
                this.selectedRole = params.role.toString().toLocaleUpperCase();
                this.simple = params.simple && params.simple.toString().toLocaleLowerCase() === 'simple';
                this.loadData();
            }
        });
    }

    private loadData() {
        this.tableData = this.timelinesService.getEvents({
            timelineId: this.timeline.id,
            positionId: this.selectedRole,
            excludeLessRelevantEvents: this.simple,
        });
    }

    simpleChanged(event: MatCheckboxChange) {
        this.loadData();
        console.log('loading');
    }

    selectedRoleChanged(event: string) {
        this.router.navigateByUrl(`e1s/${event}`);
    }
}
