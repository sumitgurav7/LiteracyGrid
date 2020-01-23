import { Component, OnInit } from '@angular/core';
import { LiteracyService } from '../Shared/literacy.service';
import { Literacy } from '../literacy/literacy';
import { ColumnDefinition } from './columnDef';
import { Utility } from '../Utility/Utility';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-literacy-tabular',
  templateUrl: './literacy-tabular.component.html',
  styleUrls: ['./literacy-tabular.component.scss']
})
export class LiteracyTabularComponent implements OnInit {

  constructor(public literacyService: LiteracyService) { }
  private gridAPi;
  private sidebar;
  private defaultColDef;
  public rowData: Literacy[];
  public columns: ColumnDefinition[];
  ngOnInit() {
    this.literacyService.getLiteracyRates().subscribe((res: Literacy[]) => {
      this.rowData = res;
    });
    this.sidebar = 'filters';
    this.columns = Utility.buildColumnDef();
    this.defaultColDef = {
      filter: true,
      sortable: true,
      enablePivot: true
    };
  }

  onGridReady(params) {
    this.gridAPi = params.api;
  }

  exportAsExcel() {
    this.gridAPi.exportDataAsExcel();
  }

  exportAsPng() {
    const element = document.getElementById('agGridLiteracy');
    html2canvas(element).then((canvas) => {
        // Convert the canvas to blob
        canvas.toBlob((blob) => {
            // To download directly on browser default 'downloads' location
            const link = document.createElement('a');
            link.download = 'literacy.png';
            link.href = URL.createObjectURL(blob);
            link.click();
            // To save manually somewhere in file explorer research needed
            // npm packages are there for save as functionality

        }, 'image/png');
    });
  }

}
