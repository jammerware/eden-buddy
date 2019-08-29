import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-copyable-code',
    templateUrl: './copyable-code.component.html',
    styleUrls: ['./copyable-code.component.scss']
})
export class CopyableCodeComponent {
    @Input() code: string;
    constructor(private snackbar: MatSnackBar) { }

    copied() {
        this.snackbar.open("Copied!", "OK!", {
            duration: 3000
        });
    }
}
