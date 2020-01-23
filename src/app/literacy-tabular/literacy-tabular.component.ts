import { Component, OnInit } from '@angular/core';
import { LiteracyService } from '../Shared/literacy.service';
import { Literacy } from '../literacy/literacy';
import { ColumnDefinition } from './columnDef';
import { Utility } from '../Utility/Utility';

@Component({
  selector: 'app-literacy-tabular',
  templateUrl: './literacy-tabular.component.html',
  styleUrls: ['./literacy-tabular.component.scss']
})
export class LiteracyTabularComponent implements OnInit {

  constructor(public literacyService: LiteracyService) { }
  private gridAPi;
  public rowData: Literacy[];
  public columns: ColumnDefinition[];
  ngOnInit() {
    this.literacyService.getLiteracyRates().subscribe((res: Literacy[]) => {
      this.rowData = res;
    });
    this.columns = Utility.buildColumnDef();
  }

  onGridReady(params) {
    this.gridAPi = params.api;
  }

  exportAsExcel() {
    debugger;
    this.gridAPi.exportDataAsExcel();
  }

}
