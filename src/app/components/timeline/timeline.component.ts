import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';

import { TimelinesService } from 'src/app/services/timelines.service';
import { Position } from 'src/app/models/position';
import { TimelineEvent } from 'src/app/models/timeline-event';
import { Timeline } from 'src/app/models/timeline';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    displayedColumns = ['time', 'mechanic', 'go-to', 'notes'];
    selectedPosition: Position;
    simple = false;
    tableData: TimelineEvent[];
    timeline: Timeline;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private timelinesService: TimelinesService,
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            if (!params.get("timelineId")) {
                throw new Error("No timelineId in route to TimelineComponent.");
            }

            this.timeline = this.timelinesService.get(params.get("timelineId"));

            if (params.get("positionId")) {
                const positionId = params.get("positionId").toLocaleLowerCase();
                this.selectedPosition = this.timelinesService.getPosition(this.timeline, positionId);
            }
            else {
                this.selectedPosition = this.timeline.positions[0];
            }

            this.simple = params.get("simple") && params.get("simple").toString().toLocaleLowerCase() === 'simple';
            this.loadData();
        });
    }

    private loadData() {
        this.tableData = this.timelinesService.getEvents({
            timelineId: this.timeline.id,
            positionId: this.selectedPosition.code,
            includeLessRelevantEvents: !this.simple,
        });
    }

    private navigate() {
        this.router.navigateByUrl(`${this.timeline.id}/${this.selectedPosition.code}${this.simple ? '/simple' : ''}`);
    }

    selectedPositionChange(event: string) {
        this.navigate();
    }

    simpleChanged(event: MatCheckboxChange) {
        this.navigate();
    }
}
