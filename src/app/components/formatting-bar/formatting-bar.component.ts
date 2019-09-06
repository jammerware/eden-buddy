import { Component, OnInit, Input } from '@angular/core';
import { CheatSheet } from 'src/app/models/cheat-sheet';
import { PrefsService } from 'src/app/services/prefs.service';
import { MatSliderChange } from '@angular/material';

@Component({
    selector: 'app-formatting-bar',
    templateUrl: './formatting-bar.component.html',
    styleUrls: ['./formatting-bar.component.scss']
})
export class FormattingBarComponent implements OnInit {
    @Input() cheatSheet: CheatSheet;

    constructor(private prefsService: PrefsService) { }

    ngOnInit() {
    }

    fontSizeChange(event: MatSliderChange) {
        this.prefsService.setFontSize(event.value);
    }
}
