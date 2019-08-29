import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';

import { TimelinesService } from 'src/app/services/timelines.service';
import { TimelineEvent } from 'src/app/models/timeline-event';
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
    tableData: TimelineEvent[];
    timeline: Timeline;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private timelinesService: TimelinesService,
    ) { }

    ngOnInit() {
        console.log('what is thing', this.activatedRoute);
        this.activatedRoute.paramMap.subscribe(params => {
            if (!params.get("timelineId")) {
                throw new Error("No timelineId in route to TimelineComponent.");
            }

            this.timeline = this.timelinesService.get(params.get("timelineId"));

            if (params.get("positionId")) {
                const positionId = params.get("positionId");
                this.selectedRole = positionId.toLocaleLowerCase();
                this.simple = params.get("simple") && params.get("simple").toString().toLocaleLowerCase() === 'simple';
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
        console.log('loaded', this.tableData);
    }

    simpleChanged(event: MatCheckboxChange) {
        this.loadData();
    }

    selectedRoleChanged(event: string) {
        this.router.navigateByUrl(`e1s/${event}`);
    }
}
