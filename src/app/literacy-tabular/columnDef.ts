export class ColumnDefinition {
    public headerName: string;
    public field: string;
    public sortable: boolean;
    public filter: boolean;

    /**
     *
     */
    constructor(headerName: string, field: string, sortable = false, filter = false) {
        this.headerName = headerName;
        this.field = field;
        this.filter = filter;
        this.sortable = sortable;
    }
}
