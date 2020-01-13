import { ColumnDefinition } from '../literacy-tabular/columnDef';

export class Utility{
    static buildColumnDef(): ColumnDefinition[] {
        return [new ColumnDefinition('S.No', 'srNo'),
        new ColumnDefinition('State', 'nameOfStatesUts', true, true),
        new ColumnDefinition('Person', 'literacyRatePersons', true, true),
        new ColumnDefinition('Male', 'literacyRateMale', true, true),
        new ColumnDefinition('Female', 'literacyRateFemale', true, true)
    ];
    }
}