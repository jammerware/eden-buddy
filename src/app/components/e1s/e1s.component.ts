import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/roles.service';
import { MacrosService } from 'src/app/macros.service';

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
    macro = this.macrosService.getE1s();
    selectedRole: string;
    tableData: FightTimelineEntry[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private macrosService: MacrosService,
        private rolesService: RolesService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.role) {
                const role = params.role.toString().toLocaleUpperCase();
                this.selectedRole = role;
                this.tableData = this.getFightTimeline(role);
            }
        });
    }

    selectedRoleChanged(event: string) {
        this.router.navigateByUrl(`e1s/${event}`);
    }

    private getFightTimeline(role: string): FightTimelineEntry[] {
        return [
            {
                mechanic: 'Vice & Virtue (DPS)',
                position: this.getViceVirtueDPSPosition(role),
                notes: this.rolesService.isDps(role) && "By the end of the cast, be near the edge of the arena in the direction of your position. When the puddle appears, return to the boss."
            },
            {
                mechanic: "Eden's Flare",
                position: "Inside the boss' hitbox",
            },
            {
                mechanic: "Vice & Virtue (Tank)",
                position: this.getViceVirtueTankPosition(role),
                notes: this.rolesService.isTank(role) && "Be in melee range in the appropriate direction. Don't forget your mitigation!"
            },
            {
                mechanic: "Spear of Paradise",
                position: this.getSpearOfParadisePosition(role),
                notes:
                    this.rolesService.isTank(role) && "If tanking the boss when the cast starts, use an invuln. If not, taunt the boss as the second swipe hits." ||
                    this.rolesService.isHealer(role) && "This is a tankbuster. The tank tanking the boss should use an invuln - be prepared to heal if they're not a PLD :)"
            },
            {
                mechanic: "Pure Light",
                position: "Corner behind the boss",
                notes: "The boss will jump to the corner it's furthest from. Be behind the boss when the cast ends. Don't touch the walls!"
            },
            {
                mechanic: "Dimensional Shift",
                position: "Wherever's cozy",
                notes: "Heavy raid-wide",
            },
            {
                mechanic: "Paradise Lost",
                position: this.getOrb1Position(role),
                notes:
                    this.rolesService.isHealerOrRanged(role) && "Start at the corner counterclockwise from your position. Bait 5 puddles along the wall as you move toward your position, and be between your orb and the wall at the end of the cast." ||
                    this.rolesService.isTankOrMelee(role) && "Keep hitting the boss until the cast is nearly finished, then run out, placing yourself between your orb and the wall of the arena."
            }
        ];
    }

    private getOrb1Position(role: string) {
        const assignments = {
            'H1': 'West (W)',
            'H2': 'South (S)',
            'R1': 'North (N)',
            'R2': 'East (E)',
            'M1': 'Southwest (SW)',
            'M2': 'Southeast (SE)',
            'T1': 'Northwest (NW)',
            'T2': 'Northeast (NE)',
        };

        return assignments[role];
    }

    private getSpearOfParadisePosition(role: string): string {
        if (!this.rolesService.isTank(role)) {
            return "South (S)";
        }

        return "Melee range";
    }

    private getViceVirtueDPSPosition(role: string): string {
        if (!this.rolesService.isDps(role)) {
            return "Melee range";
        }

        switch (role) {
            case 'M1': return 'West (W)';
            case 'M2': return 'South (S)';
            case 'R1': return 'North (N)';
            case 'R2': return 'East (E)';
        }

        return null;
    }

    private getViceVirtueTankPosition(role: string) {
        if (!this.rolesService.isTank(role)) {
            return "Stacked with non-tanks South (S) of the boss";
        }

        return role === 'T1' ? 'Northwest (NW)' : 'Northeast (NE)';
    }
}
