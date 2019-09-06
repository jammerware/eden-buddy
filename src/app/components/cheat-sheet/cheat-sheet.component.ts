import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheatSheet } from 'src/app/models/cheat-sheet';
import { CheatSheetService } from 'src/app/services/cheat-sheet.service';

@Component({
    selector: 'app-cheat-sheet',
    templateUrl: './cheat-sheet.component.html',
    styleUrls: ['./cheat-sheet.component.scss']
})
export class CheatSheetComponent implements OnInit {
    cheatSheet: CheatSheet;

    constructor(
        private activatedRoute: ActivatedRoute,
        private cheatSheetService: CheatSheetService) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const userId = params.get("userId");
            const encounterId = params.get("encounterId");

            this.cheatSheet = this.cheatSheetService.get(userId, encounterId);
        });
    }
}
