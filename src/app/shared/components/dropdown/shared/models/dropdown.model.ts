export class DropdownConfigModel {
    public dropdown_bindlabel: string;
    public dropdown_bindvalue: string;
    public dropdown_lazyload = true;
    public dropdown_searchable = false;
    public dropdown_clearable = false;
    public dropdown_localsearch = true;
    public dropdown_disabled = false;
    public dropdown_placeholder = 'Select';
    public dropdown_selectall = false;
    public dropdown_multiselect = false;
    public dropdown_addtag = true;
    public dropdown_itemsimplearray = true;
    public dropdown_pushonaddtag = true;
    public dropdown_loading = false;
    public dropdown_required = false;
    public dropdown_searchtext: string;
    public dropdown_button_style = {};


    constructor(placeholder?: string, multiselect?: boolean) {
        if (placeholder) {
            this.dropdown_placeholder = placeholder;
        }

        if (multiselect) {
            this.dropdown_multiselect = multiselect;
        }

    }

    getDisabled() {
        return this.dropdown_disabled;
    }

    getRequired() {
        return this.dropdown_required;
    }

    getPlaceholder() {
        return this.dropdown_placeholder;
    }

    getMultiSelect() {
        return this.dropdown_multiselect;
    }

    getItemSimpleArray() {
        return this.dropdown_itemsimplearray;
    }

    getIsClearable() {
        return this.dropdown_clearable;
    }

    getSearchText() {
        return this.dropdown_searchtext;
    }

    getAddTag() {
        return this.dropdown_addtag;
    }

    getPushOnAddTag() {
        return this.dropdown_pushonaddtag;
    }

    getSelectAll() {
        return this.dropdown_selectall;
    }

    getBindLabel() {
        return this.dropdown_bindlabel;
    }

    getBindValue() {
        return this.dropdown_bindvalue;
    }

    getLoading() {
        return this.dropdown_loading;
    }

    getLazyLoad() {
        return this.dropdown_lazyload;
    }

    getLocalSearch() {
        return this.dropdown_localsearch;
    }

    getSearchable() {
        return this.dropdown_searchable;
    }

    setDisabled(disabled: boolean) {
        this.dropdown_disabled = disabled;
    }

    setRequired(required: boolean) {
        this.dropdown_required = required;
    }

    setMultiSelect(multiselect: boolean) {
        this.dropdown_multiselect = multiselect;
    }

    setItemSimpleArray(itemsimplearray: boolean) {
        this.dropdown_itemsimplearray = itemsimplearray;
    }

    setSelectAll(selectall: boolean) {
        this.dropdown_selectall = selectall;
    }

    setBindLabel(bindlabel: string) {
        this.dropdown_bindlabel = bindlabel;
    }

    setBindValue(bindvalue: string) {
        this.dropdown_bindvalue = bindvalue;
    }

    setLoading(loading: boolean) {
        this.dropdown_loading = loading;
    }

    setLazyLoad(lazyload: boolean) {
        this.dropdown_lazyload = lazyload;
    }

    setLocalSearch(localsearch: boolean) {
        this.dropdown_localsearch = localsearch;
    }

    setSearchable(searchable: boolean) {
        this.dropdown_searchable = searchable;
    }

    getButtonStyle(): object {
        return this.dropdown_button_style;
    }
}
