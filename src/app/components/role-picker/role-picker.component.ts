import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
    selector: 'app-role-picker',
    templateUrl: './role-picker.component.html',
    styleUrls: ['./role-picker.component.scss']
})
export class RolePickerComponent {
    @Input() role: string;
    @Output() roleChange = new EventEmitter<string>();

    selectedRoleChange(event: MatSelectChange) {
        this.roleChange.emit(event.value);
    }
}
