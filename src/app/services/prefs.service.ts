import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PrefsService {
    fontSizeChange = new EventEmitter<number>();
    private _fontSize: number = 1;

    constructor() { }

    setFontSize(value: number) {
        this._fontSize = value;
        this.fontSizeChange.emit(this._fontSize);
    }
}
