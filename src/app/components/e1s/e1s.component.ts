import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/roles.service';

interface FightTimelineEntry {
    mechanic: string;
    position?: string;
    notes?: string;
    isImportant?: boolean;
}

@Component({
    selector: 'app-e1s',
    templateUrl: './e1s.component.html',
    styleUrls: ['./e1s.component.scss']
})
export class E1sComponent implements OnInit {
    displayedColumns = ['mechanic', 'position', 'notes'];
    selectedRole: string;
    tableData: FightTimelineEntry[];

    constructor(private rolesService: RolesService) { }

    ngOnInit() {
    }

    selectedRoleChanged(event: string) {
        this.tableData = this.getFightTimeline(event);
    }

    getFightTimeline(role: string): FightTimelineEntry[] {
        return [
            {
                mechanic: 'Vice & Virtue (DPS)',
                position: this.getViceVirtueDPSPosition(role),
                notes: "By the end of the cast, be near the edge of the arena in the direction of your position. When the puddle appears, return to the boss."
            }
        ];
    }

    getViceVirtueDPSPosition(role: string): string {
        console.log('sup', role);
        if (!this.rolesService.isDps(role)) {
            return null;
        }

        switch (role) {
            case 'M1': return 'West (W)';
            case 'M2': return 'South (S)';
            case 'R1': return 'North (N)';
            case 'R2': return 'East (E)';
        }

        return null;
    }
}
