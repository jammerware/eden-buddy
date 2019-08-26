import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/roles.service';
import { MacrosService } from 'src/app/macros.service';
import { FightTimelineEntry } from 'src/app/models/fight-timeline-entry';
import { Role } from 'src/app/models/role';
import { MatCheckboxChange } from '@angular/material';

@Component({
    selector: 'app-e1s',
    templateUrl: './e1s.component.html',
    styleUrls: ['./e1s.component.scss']
})
export class E1sComponent implements OnInit {
    displayedColumns = ['time', 'mechanic', 'position', 'notes'];
    simple = false;
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
                this.selectedRole = params.role.toString().toLocaleUpperCase();
                this.simple = params.simple && params.simple.toString().toLocaleLowerCase() === 'simple';
                this.tableData = this.getFightTimeline(this.selectedRole, this.simple);
            }
        });
    }

    simpleChanged(event: MatCheckboxChange) {
        this.loadData(this.selectedRole, this.simple);
    }

    selectedRoleChanged(event: string) {
        this.router.navigateByUrl(`e1s/${event}`);
    }

    private getFightTimeline(fightRole: string, affectsMeOnly: boolean): FightTimelineEntry[] {
        const role = this.rolesService.getRole(fightRole);

        return [
            {
                time: '0:07',
                mechanic: "Eden's Gravity",
                position: "Wherever's cozy",
                notes: "Raidwide. Shields and heals work. Mitigation doesn't :(",
                affectsRoles: [Role.Healer],
            },
            {
                time: '0:17',
                mechanic: 'Vice & Virtue (DPS)',
                position: this.getViceVirtueDPSPosition(fightRole),
                notes: this.rolesService.isDps(fightRole) && "By the end of the cast, be near the edge of the arena in the direction of your position. When the puddle appears, return to the boss.",
                affectsRoles: [Role.RangedDPS, Role.MeleeDPS],
            },
            {
                time: '0:27',
                mechanic: "Eden's Flare",
                position: "Inside the boss' hitbox",
                affectsRoles: [],
            },
            {
                time: '0:42',
                mechanic: "Vice & Virtue (Tanks)",
                position: this.getViceVirtueTankPosition(fightRole),
                notes:
                    this.rolesService.isTank(fightRole) && "Be in melee range in the appropriate direction. Don't forget your mitigation!" ||
                    this.rolesService.isHealer(fightRole) && "This is gonna hurt your poor tanks. Heals at the ready!",
                affectsRoles: [Role.Tank, Role.Healer],
            },
            {
                time: '0:52',
                mechanic: "Spear of Paradise",
                position: this.getSpearOfParadisePosition(fightRole),
                notes:
                    this.rolesService.isTank(fightRole) && "If tanking the boss when the cast starts, use an invuln. If not, taunt the boss as the second swipe hits." ||
                    this.rolesService.isHealer(fightRole) && "This is a tankbuster. The tank tanking the boss should use an invuln - be prepared to heal if they're not a PLD :)",
                affectsRoles: [Role.Tank, Role.Healer],
            },
            {
                time: '1:00',
                mechanic: "Vice & Virtue (Healers)",
                position: this.getViceVirtueHealerPosition(fightRole),
                notes:
                    this.rolesService.isTank(fightRole) && "Stand as still as you can at your position in melee range of the boss. This lets your healer bring the prey marker to you more easily." ||
                    this.rolesService.isHealer(fightRole) && "Bring your prey marker to the tank buddy at your assigned position. Don't forget to thank them for their trouble with a Lustrate when the cast goes off!",
                affectsRoles: [Role.Tank, Role.Healer],
            },
            {
                time: '1:26',
                mechanic: "Delta Attack",
                position: this.getDeltaAttackPosition(fightRole),
                notes: "Your raid group will form a large X centered on the boss. Be in your position when the cast ends, or you'll clip a party member with your AOE or die to another one yourself.",
                affectsRoles: [],

            },
            {
                time: '1:13',
                mechanic: "Pure Light",
                position: "Corner behind the boss",
                notes: "The boss will jump to the corner it's furthest from. Be behind the boss when the cast ends. Don't touch the walls!",
                affectsRoles: []
            },
            {
                time: '1:39',
                mechanic: "Dimensional Shift",
                position: "Wherever's cozy",
                notes: "Heavy raid-wide",
                affectsRoles: [Role.Healer],
            },
            {
                time: '1:46',
                mechanic: "Paradise Lost",
                position: this.getParadiseLostPosition(fightRole),
                notes: "Start at the corner counterclockwise from your position. Bait 5 puddles along the wall as you move toward your position, and be between your orb and the wall at the end of the cast.",
                affectsRoles: [Role.Healer, Role.RangedDPS],
            },
            {
                time: '1:52',
                mechanic: "Pure Beam",
                position: this.getOrb1Position(fightRole),
                notes: "When Pure Beam is nearly finished casting, run out, placing yourself close to your orb, but standing between it and the wall of the arena.",
                affectsRoles: [],
            },
            {
                time: '2:16',
                mechanic: "Dimensional Shift",
                position: "Wherever's cozy",
                notes: "Heavy raid-wide",
                affectsRoles: [Role.Healer],
            },
            {
                time: '2:26',
                mechanic: "Fragor Maximus",
                notes: "Raid-wide",
                affectsRoles: [Role.Healer],
            },
            {
                time: '2:46',
                mechanic: "Paradisal Dive",
                position: "South (S)",
                notes: "Here come the adds. Stack with your group for shields, heals, and mitigation. Be sure to interrupt Mana Boost and cleave down the adds ASAP.",
                affectsRoles: [],
            },
            {
                time: '4:36',
                mechanic: "Vice & Virtue Regained (Tank)",
                position: this.getViceVirtueRegainedTankPosition(fightRole),
                notes: "Stack with your partners  at the appropriate position - there's usually a numbered waymark for this purpose. Make sure the tank in your stack isn't the closest to the boss.",
                affectsRoles: [],
            },
            {
                time: '4:50',
                mechanic: "Vice & Virtue Regained (DPS)",
                position: this.getViceVirtueRegainedDPSPosition(fightRole),
                notes: "Stack with your partner to share an invisible stack marker's damage.",
                affectsRoles: [],
            }
        ].filter(e =>
            !affectsMeOnly ||
            e.affectsRoles.length === 0 ||
            e.affectsRoles.indexOf(role) >= 0);
    }

    private getDeltaAttackPosition(role: string) {
        const assignments = {
            'T1': "Northwest (NW) - max melee",
            'T2': "Northeast (NE) - max melee",
            'H1': "Southwest (SW) - corner",
            'H2': "Southeast (SE) - corner",
            'M1': "Southwest (SW) - max melee",
            'M2': "Southeast (SE) - max melee",
            'R1': 'Northwest (NW) - corner',
            'R2': 'Northeast (NE) - corner',
        };

        return assignments[role];
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

    private getParadiseLostPosition(role: string) {
        const assignments = {
            'H1': 'West (W)',
            'H2': 'South (S)',
            'R1': 'North (N)',
            'R2': 'East (E)',
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

    private getViceVirtueRegainedDPSPosition(role: string): string {
        switch (role) {
            case 'R1':
            case 'T1': return "Northwest (NW)";
            case 'R2':
            case 'T2': return "Northeast (NE)";
            case 'M2':
            case 'H2': return "Southeast (SE)";
            case 'M1':
            case 'H1': return "Southwest (SW)";
        }

        return null;
    }

    private getViceVirtueHealerPosition(role: string) {
        if (this.rolesService.isDps(role)) {
            return "Stacked with other DPS South (S) of the boss";
        }

        switch (role) {
            case 'H1':
            case 'T1': return 'Northwest (NW)';
            case 'H2':
            case 'T2': return 'Northeast (NE)';
        }
    }

    private getViceVirtueRegainedTankPosition(role: string) {
        return ['M1', 'H1', 'T1', 'R1'].indexOf(role) < 0 ?
            "East (E)" : "West (W)"
    }

    private getViceVirtueTankPosition(role: string) {
        if (!this.rolesService.isTank(role)) {
            return "Stacked with non-tanks South (S) of the boss";
        }

        return role === 'T1' ? 'Northwest (NW)' : 'Northeast (NE)';
    }

    private loadData(fightRole: string, isSimple: boolean) {
        this.tableData = this.getFightTimeline(fightRole, isSimple);
    }
}
