import {Component, EventEmitter, HostListener, Input, OnChanges, Output} from '@angular/core';
import {DropdownConfigModel} from './shared/models/dropdown.model';
import {DropdownService} from './shared/services/dropdown.service';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {
    @Input() dropdownItems = [];
    @Input() dropdownSelectedItem;
    @Input() dropdownConfig = new DropdownConfigModel();

    @Output() dropdownOpen = new EventEmitter();
    @Output() dropdownSearch = new EventEmitter();
    @Output() dropdownScroll = new EventEmitter();
    @Output() dropdownRealtimeSearch = new EventEmitter();
    @Output() dropdownSelectedItemChange = new EventEmitter();

    public isopen = false;
    public message = '';
    public exception = false;
    public id;

    @HostListener('document:click', ['$event']) clickedOutside($event): void {
        // this.isopen = false;
    }

    constructor(private dropdownService: DropdownService) {
        this.id = this.generateId(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

        DropdownService.dropdownOpenState.subscribe((val) => {
            this.isopen = val === this.id;
        });
    }

    private generateId(length, chars) {
        let result = '';
        for (let i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    public ngOnChanges(): void {
        this.toggleMessage('');


        if (this.dropdownConfig === undefined) {
            this.dropdownConfig = new DropdownConfigModel();
        }

        if (this.dropdownConfig.getMultiSelect()) {
            if (this.dropdownSelectedItem !== undefined) {
                if (this.dropdownSelectedItem.constructor !== Array) {
                    this.toggleMessage('Exception: Selected Item must be an array when multiselect is true', true);
                }
            }
        }

        if (!this.dropdownConfig.getItemSimpleArray()) {
            if (!this.dropdownConfig.getBindLabel() && !this.dropdownConfig.getBindValue()) {
                this.toggleMessage('Exception: Bind Value and Bind Label must be provided when SimpleArray is false', true);
            }
        }

        if (this.dropdownItems.length === 0) {
            this.toggleMessage('No Results Found');
        }

    }

    public get getSelectedItem() {
        if (this.dropdownSelectedItem !== undefined) {
            if (this.dropdownConfig.getMultiSelect()) {
                if (this.dropdownSelectedItem.length > 0) {
                    if (this.dropdownConfig.getItemSimpleArray()) {
                        return this.dropdownSelectedItem.toString();
                    } else {
                        const arr = [];
                        for (const j of this.dropdownSelectedItem) {
                            for (const i of this.dropdownItems) {
                                if (i[this.dropdownConfig.getBindValue()] === j) {
                                    arr.push(i[this.dropdownConfig.getBindLabel()]);
                                }
                            }
                        }
                        return arr.toString();
                    }
                }
                return this.dropdownConfig.getPlaceholder();
            } else {
                if (this.dropdownConfig.getItemSimpleArray()) {
                    return this.dropdownSelectedItem.toString();
                } else {
                    const item = this.dropdownSelectedItem;
                    for (const i of this.dropdownItems) {
                        if (i[this.dropdownConfig.getBindValue()] === item) {
                            return i[this.dropdownConfig.getBindLabel()];
                        }
                    }
                }
            }
        }
        return this.dropdownConfig.getPlaceholder();
    }

    public get isPlaceHolder(): boolean {
        if (this.dropdownSelectedItem !== undefined) {
            if (this.dropdownConfig.getMultiSelect()) {
                return this.dropdownSelectedItem.length === 0;
            } else {
                let selecteditem;
                if (this.dropdownConfig.getItemSimpleArray()) {
                    selecteditem = this.dropdownSelectedItem;
                } else {
                    selecteditem = this.dropdownSelectedItem[this.dropdownConfig.getBindLabel()];
                }

                return selecteditem === undefined || selecteditem === '' || selecteditem === null;
            }
        }
        return true;
    }

    public get areAllSelected(): boolean {
        if (this.dropdownSelectedItem !== undefined) {
            return this.dropdownItems.length === this.dropdownSelectedItem.length;
        }
    }

    public toggleMessage(message, exception = false): void {
        this.message = message;
        this.exception = exception;
    }

    public resolveBindingLabels(item, type = 'label') {
        if (!this.dropdownConfig.getItemSimpleArray()) {
            if (type === 'label') {
                return item[this.dropdownConfig.getBindLabel()];
            }
            return item[this.dropdownConfig.getBindValue()];
        }
        return item;
    }

    public onSelect(item): void {
        if (this.dropdownConfig.getMultiSelect()) {
            if (this.dropdownSelectedItem === undefined) {
                this.dropdownSelectedItem = [];
            }
            if (this.isItemPresentInSelection(item)) {
                const index = this.dropdownSelectedItem.indexOf(this.resolveBindingLabels(item, 'value'));
                if (index > -1) {
                    this.dropdownSelectedItem.splice(index, 1);
                }
            } else {
                this.dropdownSelectedItem.push(this.resolveBindingLabels(item, 'value'));
            }
        } else {
            this.dropdownSelectedItem = this.resolveBindingLabels(item, 'value');
        }

        this.dropdownSelectedItemChange.emit(this.dropdownSelectedItem);
        if (!this.dropdownConfig.getMultiSelect()) {
            this.toggleDropdownOpenState();
        }
    }

    public toggleDropdownOpenState() {
        event.stopPropagation();
        this.dropdownConfig.dropdown_searchtext = '';
        this.isopen = !this.isopen;
        this.dropdownOpen.emit(this.isopen);

        if (this.isopen) {
            this.dropdownService.openDropdown(this.id);
        } else {
            this.dropdownService.closeDropdown();
        }
    }

    public onClearingItems() {
        event.stopPropagation();
        if (this.dropdownConfig.getMultiSelect()) {
            this.dropdownSelectedItem = [];
        } else {
            this.dropdownSelectedItem = undefined;
        }
        this.dropdownSelectedItemChange.emit(this.dropdownSelectedItem);
    }

    public isItemPresentInSelection(item): boolean {
        if (this.dropdownConfig.getMultiSelect()) {
            if (!this.dropdownConfig.getItemSimpleArray()) {
                if (this.dropdownSelectedItem === undefined) {
                    return false;
                }

                for (const i of this.dropdownSelectedItem) {
                    if (i === item[this.dropdownConfig.getBindValue()]) {
                        return true;
                    }
                }
                return false;
            } else {
                try {
                    return this.dropdownSelectedItem.indexOf(item) >= 0;
                } catch (e) {
                    return false;
                }
            }
        } else {
            if (!this.dropdownConfig.getItemSimpleArray()) {
                return this.dropdownSelectedItem === item[this.dropdownConfig.getBindValue()];
            } else {
                return this.dropdownSelectedItem === item;
            }
        }
    }

    public isItemPresentInDropdownItems(item): boolean {
        if (this.dropdownConfig.getItemSimpleArray()) {
            return this.dropdownItems.indexOf(item) > -1;
        } else {
            for (const i of this.dropdownItems) {
                if (i[this.dropdownConfig.getBindLabel()] === item[this.dropdownConfig.getBindLabel()]) {
                    return true;
                }
            }
            return false;
        }
    }

    public onSearch() {
        this.dropdownSearch.emit(this.dropdownConfig.dropdown_searchtext);
    }

    public onRealTimeSearch() {
        if (this.dropdownConfig.getLocalSearch()) {
            this.toggleMessage('');

            if (this.dropdownConfig.dropdown_searchtext) {
                let isfound = false;

                if (this.dropdownConfig.getItemSimpleArray()) {
                    for (const item of this.dropdownItems) {
                        if (item.toString().includes(this.dropdownConfig.dropdown_searchtext)) {
                            isfound = true;
                            break;
                        }
                    }
                } else {
                    for (const item of this.dropdownItems) {
                        if (item[this.dropdownConfig.getBindLabel()].toString().includes(this.dropdownConfig.dropdown_searchtext)) {
                            isfound = true;
                            break;
                        }
                    }
                }

                if (!isfound) {
                    this.toggleMessage(DropdownService.errorMessages.notFoundError, true);
                }
            }

        } else {
            this.dropdownRealtimeSearch.emit(this.dropdownConfig.dropdown_searchtext);
        }
    }

    public ifItemPresent(item) {
        if (this.dropdownConfig.getLocalSearch()) {
            if (!this.dropdownConfig.getSearchText()) {
                return true;
            }

            if (this.dropdownConfig.getItemSimpleArray()) {
                return item.toString().includes(this.dropdownConfig.getSearchText());
            } else {
                return item[this.dropdownConfig.getBindLabel()].toString().includes(this.dropdownConfig.getSearchText());
            }
        }

        return true;
    }

    public onScroll() {
        this.dropdownScroll.emit();
    }

    public onAddTag() {

        // Is Add Tag Enabled
        if (this.dropdownConfig.getAddTag()) {

            // Is it a Simple Array
            if (this.dropdownConfig.getItemSimpleArray()) {

                // Is the Item present in Items Array
                if (!this.isItemPresentInDropdownItems(this.dropdownConfig.dropdown_searchtext)) {
                    this.dropdownItems.unshift(this.dropdownConfig.dropdown_searchtext);

                    // Push inside Selected Item
                    if (this.dropdownConfig.getPushOnAddTag()) {
                        if (this.dropdownConfig.getMultiSelect()) {
                            if (this.dropdownSelectedItem === undefined) {
                                this.dropdownSelectedItem = [];
                            }

                            if (!this.isItemPresentInSelection(this.dropdownConfig.dropdown_searchtext)) {
                                this.dropdownSelectedItem.unshift(this.dropdownConfig.dropdown_searchtext);
                            }
                        } else {
                            this.dropdownSelectedItem = this.dropdownConfig.dropdown_searchtext;
                        }
                    }
                } else {
                    this.toggleMessage('Warning: The item is already present in the list');
                }
            } else {
                // Create Dict from Labels (Not a simple Array)
                const temp = {};
                temp[this.dropdownConfig.getBindLabel()] = this.dropdownConfig.dropdown_searchtext;
                temp[this.dropdownConfig.getBindValue()] = this.dropdownConfig.dropdown_searchtext;

                // Is the Item present in Items Array
                if (!this.isItemPresentInDropdownItems(this.dropdownConfig.dropdown_searchtext)) {
                    this.dropdownItems.unshift(temp);

                    // Push inside Selected Item
                    if (this.dropdownConfig.getPushOnAddTag()) {
                        if (this.dropdownConfig.getMultiSelect()) {
                            if (this.dropdownSelectedItem === undefined) {
                                this.dropdownSelectedItem = [];
                            }

                            if (!this.isItemPresentInSelection(temp)) {
                                this.dropdownSelectedItem.unshift(temp[this.dropdownConfig.getBindValue()]);
                            }
                        } else {
                            this.dropdownSelectedItem = temp;
                        }
                    }
                } else {
                    this.toggleMessage('Warning: The item is already present in the list');
                }
            }
        }
    }

    public onSelectAll() {
        if (this.areAllSelected) {
            this.dropdownSelectedItem = [];
        } else {
            if (this.dropdownConfig.getItemSimpleArray()) {
                this.dropdownSelectedItem = JSON.parse(JSON.stringify(this.dropdownItems));
            } else {
                const arr = [];
                for (const i of this.dropdownItems) {
                    arr.push(i[this.dropdownConfig.getBindValue()]);
                }
                this.dropdownSelectedItem = arr;
            }
        }

        this.dropdownSelectedItemChange.emit(this.dropdownSelectedItem);
    }

}
