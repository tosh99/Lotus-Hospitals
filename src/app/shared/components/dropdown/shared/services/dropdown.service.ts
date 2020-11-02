import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DropdownService {
    public static dropdownOpenState = new BehaviorSubject(null);
    public static errorMessages = {
        notFoundError: 'No Results Found (Dropdown)'
    };

    openDropdown(dropdownId) {
        DropdownService.dropdownOpenState.next(dropdownId);
    }

    closeDropdown() {
        DropdownService.dropdownOpenState.next(undefined);
    }
}
