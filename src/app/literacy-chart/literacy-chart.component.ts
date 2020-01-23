import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { Literacy } from '../literacy/literacy';
import { LiteracyService } from '../Shared/literacy.service';

@Component({
  selector: 'app-literacy-chart',
  templateUrl: './literacy-chart.component.html',
  styleUrls: ['./literacy-chart.component.scss']
})
export class LiteracyChartComponent implements OnInit {

  constructor(public literacyService: LiteracyService) {
    this.rowData = [80, 25, 69];
  }

  /*@Input() */public rowData: any[];
  ngOnInit() {
    this.literacyService.getLiteracyRates().subscribe((res: Literacy[]) => {
      this.rowData = res;
      this.populateChart();
    });
  }


  private populateChart() {
    d3.select('.chart')
      .selectAll('div')
      .data(this.rowData)
      .enter().append('div')
      .style('width', (data) => data.literacyRatePersons + 'px')
      .style('height', '25px').style('background-color', 'blue').style('margin', '5px')
      .text((data) => data.nameOfStatesUts);
  }
}
