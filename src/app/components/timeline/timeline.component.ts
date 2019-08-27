import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';

import { TimelinesService } from 'src/app/services/timelines.service';
import { TimelineEntry } from 'src/app/models/timeline-entry';

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

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private timelinesService: TimelinesService,
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.role) {
                this.selectedRole = params.role.toString().toLocaleUpperCase();
                this.simple = params.simple && params.simple.toString().toLocaleLowerCase() === 'simple';
                this.tableData = this.getFightTimeline(this.selectedRole, this.simple);
            }
        });
    }

    private loadData(fightRole: string, isSimple: boolean) {
        this.tableData = this.getFightTimeline(fightRole, isSimple);
    }

    simpleChanged(event: MatCheckboxChange) {
        this.loadData(this.selectedRole, this.simple);
    }

    selectedRoleChanged(event: string) {
        this.router.navigateByUrl(`e1s/${event}`);
    }
}
