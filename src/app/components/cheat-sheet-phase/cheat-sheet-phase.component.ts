import { Component, OnInit, Input } from '@angular/core';
import { CheatSheetPhase } from 'src/app/models/cheat-sheet-phase';
import { PrefsService } from 'src/app/services/prefs.service';
import { pipe, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'app-cheat-sheet-phase',
    templateUrl: './cheat-sheet-phase.component.html',
    styleUrls: ['./cheat-sheet-phase.component.scss']
})
export class CheatSheetPhaseComponent implements OnInit {
    @Input() phase: CheatSheetPhase;
    fontSize$ = this.prefs.fontSizeChange.pipe(distinctUntilChanged());

    constructor(private prefs: PrefsService) { }

    ngOnInit() {
    }
}
