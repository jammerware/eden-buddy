import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-copyable-code',
    templateUrl: './copyable-code.component.html',
    styleUrls: ['./copyable-code.component.scss']
})
export class CopyableCodeComponent implements OnInit {
    @Input() code: string;
    constructor() { }

    ngOnInit() {
    }

}
