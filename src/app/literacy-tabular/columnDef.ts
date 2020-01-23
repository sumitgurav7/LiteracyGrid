export class ColumnDefinition {
    public headerName: string;
    public field: string;
    public sortable: boolean;
    public filter: boolean;
    public cellStyle: any;
    public valueParser: any;

    /**
     *
     */
    constructor(headerName: string, field: string, sortable = false, filter = false, isPerc = false) {
        this.headerName = headerName;
        this.field = field;
        this.filter = filter;
        this.sortable = sortable;
        this.valueParser = this.numberParser;
        this.cellStyle = isPerc ? this.setCellColor : {'background-color' : 'white'};
    }

    setCellColor(params) {
        const color = params.value > 75 ? 'lightgreen' : params.value < 75 && params.value > 70 ? 'lightsalmon' : 'lightcoral' ;
        return {'background-color' : color};
    }
    numberParser(params) {
        const newValue = params.newValue;
        let valueAsNumber;
        if (newValue === null || newValue === undefined || newValue === '') {
          valueAsNumber = null;
        } else {
          valueAsNumber = parseFloat(params.newValue);
        }
        return valueAsNumber;
      }
}
