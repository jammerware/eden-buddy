import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
    selector: 'app-role-picker',
    templateUrl: './role-picker.component.html',
    styleUrls: ['./role-picker.component.scss']
})
export class RolePickerComponent {
    role: string;
    @Output() roleChange = new EventEmitter<string>();

    selectedRoleChange(event: MatSelectChange) {
        this.roleChange.emit(event.value);
    }
}
