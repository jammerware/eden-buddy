import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-copyable-code',
    templateUrl: './copyable-code.component.html',
    styleUrls: ['./copyable-code.component.scss']
})
export class CopyableCodeComponent implements OnInit {
    @Input() code: string;
    constructor(private snackbar: MatSnackBar) { }

    ngOnInit() {
        if (this.code) {
            this.code = this.code.trim()
        }
    }

    copied() {
        this.snackbar.open("Copied!", "OK!", {
            duration: 3000
        });
    }
}
